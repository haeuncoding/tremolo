# == Schema Information
#
# Table name: makes
#
#  id         :bigint           not null, primary key
#  brand_name :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Make < ApplicationRecord
  validates :brand_name, presence: true, uniqueness: true

  # relations
  has_many :listings,
    primary_key: :id,
    foreign_key: :make_id,
    class_name: :Listing
end
