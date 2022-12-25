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
end
