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
end
