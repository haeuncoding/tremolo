class ChangeColumn < ActiveRecord::Migration[7.0]
  def change
    add_reference :listings, :shops, column: :shop, primary_key: :id
  end
end
