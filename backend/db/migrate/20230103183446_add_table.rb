class AddTable < ActiveRecord::Migration[7.0]
  def change
    create_table :models do |t|
      t.references :make, null: false, foreign_key: true
      t.string :model, null: false, unique: true

      t.timestamps
    end

    rename_table :listing_reviews, :model_reviews
    rename_column :model_reviews, :listing_reviewer_id, :model_reviewer_id
    rename_column :model_reviews, :listing_reviewed_id, :model_reviewed_id

    add_column :listings, :model_id, :string

  end
end
