class CreateCart < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :cart, :bigint, array: true, default: []
  end
end
