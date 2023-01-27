class AddListingId < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :listing_id, :string
  end
end
