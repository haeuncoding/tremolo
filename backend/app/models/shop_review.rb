# == Schema Information
#
# Table name: shop_reviews
#
#  id               :bigint           not null, primary key
#  shop_reviewer_id :bigint           not null
#  shop_reviewed_id :bigint           not null
#  rating           :integer
#  description      :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class ShopReview < ApplicationRecord
# validations
  validates :rating, numericality: { in: 1..5 }

# relations
  belongs_to :shop_reviewer,
    foreign_key: :shop_reviewer_id,
    class_name: :User

  belongs_to :shop_reviewed,
    foreign_key: :shop_reviewed_id,
    class_name: :Shop
end
