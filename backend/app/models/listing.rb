# == Schema Information
#
# Table name: listings
#
#  id            :bigint           not null, primary key
#  lister_id     :bigint           not null
#  make_id       :bigint           not null
#  category_id   :bigint           not null
#  listing_title :string           not null
#  condition     :string           not null
#  price         :float            not null
#  location      :string           not null
#  color         :string
#  year_made     :string
#  description   :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  watcher_count :integer
#  model_id      :bigint
#
class Listing < ApplicationRecord

  CONDITIONS = [
    "Non-Functioning", 
    "Poor", 
    "Fair", 
    "Good", 
    "Very Good", 
    "Excellent", 
    "Mint", 
    "Brand New"
  ]

# validations
  # validates :lister_id, presence: true
  validates :make_id, presence: true
  validates :model_id, presence: true
  validates :category_id, presence: true
  # validates :listing_title, allow_nil: true
  validates :condition, inclusion: { in: CONDITIONS }
  validates :price, numericality: { minimum: 0 }, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :watcher_count, allow_nil: true, numericality: { minimum: 0 }
# relations

  # has_many :watchers,
  #   primary_key: :id,
  #   foreign_key: :watcher_id,
  #   class_name: :User,
  #   dependent: :destroy
  
  belongs_to :shop,
    primary_key: :id,
    foreign_key: :lister_id,
    class_name: :User

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category

  belongs_to :make,
    primary_key: :id,
    foreign_key: :make_id,
    class_name: :Make

  belongs_to :model,
    primary_key: :id,
    foreign_key: :model_id,
    class_name: :Model

  def self.find_by_id(id)
    @listing = Listing.find_by(id)
    if @listing.id
      return @listing
    else
      return nil
    end
  end

  def self.in_category(category_id)
    Listing.where(category_id: category_id)
  end

  def self.of_make(make_id)
    Listing.where(make_id: make_id)
  end

  def self.of_model(make_id, model_id)
    Listing.where(make_id: make_id, model_id: model_id)
  end

  def self.of_shop(shop_id)
    Listing.where(lister_id: shop_id)
  end

  def self.apply_filters(category_id, make_id, model_id, lister_id, min_price, max_price)
    Listing.where(category_id: category_id, make_id: make_id, model_id: model_id, lister_id: lister_id, price: (min_price..max_price))
  end

  def add_watcher_count
    self.watcher_count += 1
  end
  
  def subtract_watcher_count
    self.watcher_count -= 1
  end


end
