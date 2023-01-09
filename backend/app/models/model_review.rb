# == Schema Information
#
# Table name: model_reviews
#
#  id                :bigint           not null, primary key
#  model_reviewer_id :bigint           not null
#  model_reviewed_id :bigint           not null
#  rating            :integer          not null
#  description       :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class ModelReview < ApplicationRecord
# validations
  validates :rating, numericality: { in: 1..5 }

# relations
  belongs_to :model_reviewer,
    foreign_key: :model_reviewer_id,
    class_name: :User

  belongs_to :model_reviewed,
    foreign_key: :model_reviewed_id,
    class_name: :Model
end
