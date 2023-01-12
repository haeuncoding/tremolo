class ChangeColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :shop_name, :string
    remove_foreign_key :listings, :shops
    remove_foreign_key :shops, :users, column: :owner_id
    drop_table :shop_reviews
    drop_table :shops
  end
end
