# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
  CATEGORIES = [
    "Guitars",
    "Basses",
    "Pedals",
    "Amplifiers",
    "Keyboards and Synths",
    "Percussion",
    "Recording",
    "Pro Audio"
  ]
# validations
  validates :category, inclusion: { in: CATEGORIES }

# relations
  has_many :listings,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Listing
end
