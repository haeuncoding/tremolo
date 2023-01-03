# == Schema Information
#
# Table name: shops
#
#  id         :bigint           not null, primary key
#  shop_name  :string           not null
#  owner_id   :bigint           not null
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Shop < ApplicationRecord
  validates :shop_name, presence: true
  validates :owner_id, presence: true, uniqueness: true
  validates :location, presence: true

  has_many :listings,
    primary_key: :id,
    foreign_key: :shop_id,
    class_name: :Listing

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
