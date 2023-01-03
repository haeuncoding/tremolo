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
  # validates :make_id, presence: true
  # validates :category_id, presence: true
  validates :listing_title, presence: true
  validates :condition, inclusion: { in: CONDITIONS }
  validates :price, numericality: { minimum: 0 }, presence: true
  validates :location, presence: true
  validates :description, presence: true

# relations
  has_many :listing_reviews,
    primary_key: :id,
    foreign_key: :listing_review_id,
    class_name: :ListingReview

  has_many :watchers,
    primary_key: :id,
    foreign_key: :watcher_id,
    class_name: :User,
    dependent: :destroy
  
  belongs_to :lister,
    foreign_key: :lister_id,
    class_name: :Shop

  def self.find_by_id(id)
    @listing = Listing.find_by(id)
    if @listing.id
      return @listing
    else
      return nil
    end
  end

  def self.find_by_category(category_id)
    @listings = Listing.select { |listing| listing.category.id == category.id }
    if @listings
      return @listings
    else
      return nil
    end
  end
  
end
