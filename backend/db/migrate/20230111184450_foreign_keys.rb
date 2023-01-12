class ForeignKeys < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :location, false
    change_column_null :models, :category_id, false
    add_foreign_key :listings, :users, column: :lister_id, index: true
  end
end
