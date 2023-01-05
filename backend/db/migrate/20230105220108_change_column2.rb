class ChangeColumn2 < ActiveRecord::Migration[7.0]
  def change
    rename_column :listings, :shops_id, :shop_id
    add_foreign_key :listings, :shops
  end
end
