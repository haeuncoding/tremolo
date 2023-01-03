class AddForeignKeys < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :shops, :users, column: :owner_id, primary_key: :id
    add_foreign_key :listings, :shops, column: :lister_id, primary_key: :id
    add_foreign_key :listings, :makes, column: :make_id, primary_key: :id
    add_foreign_key :listings, :categories, column: :category_id, primary_key: :id
    add_foreign_key :shop_reviews, :users, column: :shop_reviewer_id, primary_key: :id
    add_foreign_key :shop_reviews, :shops, column: :shop_reviewed_id, primary_key: :id
  end
end
