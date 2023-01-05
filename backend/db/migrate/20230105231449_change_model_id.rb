class ChangeModelId < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :model_id
    add_reference :listings, :models, index: true
  end
end
