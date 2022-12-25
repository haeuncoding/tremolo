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
end
