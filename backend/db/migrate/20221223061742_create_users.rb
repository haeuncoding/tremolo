class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :location

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  
    create_table :listings do |t|
      t.references :lister, index: true, null: false
      t.references :make, index: true, null: false
      t.references :category, index: true, null: false
      t.string :listing_title, null: false
      t.string :condition, null: false
      t.float :price, null: false
      t.string :location, null: false
      t.string :color
      t.string :year_made
      t.text :description, null: false
      t.timestamps
    end

    # add_index :listings, :lister_id
    # add_index :listings, :make_id
    # add_index :listings, :category_id

    create_table :shops do |t|
      t.string :shop_name, index: true, unique: true, null: false
      t.references :owner, index: true, unique: true, null: false
      t.string :location

      t.timestamps
    end

    create_table :shop_reviews do |t|
      t.references :shop_reviewer, index: true, null: false
      t.references :shop_reviewed, index: true, null: false
      t.integer :rating
      t.text :description

      t.timestamps
    end

    create_table :listing_reviews do |t|
      t.references :listing_reviewer, index: true, null: false
      t.references :listing_reviewed, index: true, null: false
      t.integer :rating, null: false
      t.text :description

      t.timestamps
    end
    
    create_table :categories do |t|
      t.string :category, null: false
      t.timestamps
    end

    add_index :categories, :category, unique: true

    create_table :makes do |t|
      t.string :brand_name, null: false
      t.timestamps
    end

    add_index :makes, :brand_name, unique: true
  end
end
