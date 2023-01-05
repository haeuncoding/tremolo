class RenameColumn3 < ActiveRecord::Migration[7.0]
  def change
    rename_column :listings, :models_id, :model_id
  end
end
