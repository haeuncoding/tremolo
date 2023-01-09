# == Schema Information
#
# Table name: models
#
#  id         :bigint           not null, primary key
#  make_id    :bigint           not null
#  model      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
    # t.string "model", null: false
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.index ["make_id"], name: "index_models_on_make_id"

class Model < ApplicationRecord
  validates :model, presence: true, uniqueness: true
  validates :make_id, presence: true
  validates :category_id, presence: true

  has_many :listings,
    primary_key: :id,
    foreign_key: :model_id,
    class_name: :Listing
  
  has_many :model_review,
    primary_key: :id,
    foreign_key: :model_reviewed_id,
    class_name: :ModelReview


end
