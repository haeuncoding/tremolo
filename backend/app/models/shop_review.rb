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
end
