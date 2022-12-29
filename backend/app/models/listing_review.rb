# == Schema Information
#
# Table name: listing_reviews
#
#  id                  :bigint           not null, primary key
#  listing_reviewer_id :bigint           not null
#  listing_reviewed_id :bigint           not null
#  rating              :integer          not null
#  description         :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class ListingReview < ApplicationRecord
# validations
  validates :rating, numericality: { in: 1..5 }

# relations
  belongs_to :listing_reviewer,
    foreign_key: :listing_reviewer_id,
    class_name: :User

  belongs_to :listing_reviewed,
    foreign_key: :listing_reviewed_id,
    class_name: :Listing
end
