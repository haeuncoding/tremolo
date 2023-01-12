# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  location        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  watchlist       :bigint           default([]), is an Array
#  cart            :bigint           default([]), is an Array
#  shop_name       :string
#
class User < ApplicationRecord

# validations
  has_secure_password
  before_validation :ensure_session_token
  validates :username,
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, 
      message: "Your username cannot be your email." 
    }
  validates :email,
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :location, presence: true
# relations
  # has_many :shop_reviews,

  has_many :model_reviews,
    primary_key: :id,
    foreign_key: :model_reviewer_id,
    class_name: :ModelReview
  
  has_many :listings, 
    primary_key: :id,
    foreign_key: :lister_id,
    class_name: :Listing,
    dependent: :destroy
    
  has_many :watched_listings,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Listing
  


# authorization methods 
  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcrypt_obj = BCrypt::Password.new(self.password_digest)
    bcrypt_obj.is_password?(password)
  end

  def reset_session_token
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def add_to_watchlist(listing_id)
    self.watched_listings << listing_id
    watched = Listing.find_by_id(:listing_id)
    watched.add_watcher_count
  end

  def remove_from_watchlist(listing_id)
    watched = Listing.find_by_id(:listing_id)
    self.watched_listings.delete(listing_id)
    watched.subtract_watcher_count
  end

  private

  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64
    end
    token
  end

end
