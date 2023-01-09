class EditMakes < ActiveRecord::Migration[7.0]
  def change
    add_column :models, :category_id, :bigint, foreign_key: :true
  end
end
