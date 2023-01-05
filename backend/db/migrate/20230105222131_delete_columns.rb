class DeleteColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :shop_id
  end
end
