class UserEdit < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :watchlist, :bigint, array: true, default: []
    add_reference :listings, :users, column: :watcher_id, primary_key: :id
    add_column :listings, :watcher_count, :integer
  end
end
