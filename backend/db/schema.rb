# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_05_085817) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_categories_on_category", unique: true
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "lister_id", null: false
    t.bigint "make_id", null: false
    t.bigint "category_id", null: false
    t.string "listing_title", null: false
    t.string "condition", null: false
    t.float "price", null: false
    t.string "location", null: false
    t.string "color"
    t.string "year_made"
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "model_id"
    t.integer "watcher_count"
    t.index ["category_id"], name: "index_listings_on_category_id"
    t.index ["lister_id"], name: "index_listings_on_lister_id"
    t.index ["make_id"], name: "index_listings_on_make_id"
  end

  create_table "makes", force: :cascade do |t|
    t.string "brand_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_name"], name: "index_makes_on_brand_name", unique: true
  end

  create_table "model_reviews", force: :cascade do |t|
    t.bigint "model_reviewer_id", null: false
    t.bigint "model_reviewed_id", null: false
    t.integer "rating", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["model_reviewed_id"], name: "index_model_reviews_on_model_reviewed_id"
    t.index ["model_reviewer_id"], name: "index_model_reviews_on_model_reviewer_id"
  end

  create_table "models", force: :cascade do |t|
    t.bigint "make_id", null: false
    t.string "model", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["make_id"], name: "index_models_on_make_id"
  end

  create_table "shop_reviews", force: :cascade do |t|
    t.bigint "shop_reviewer_id", null: false
    t.bigint "shop_reviewed_id", null: false
    t.integer "rating"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shop_reviewed_id"], name: "index_shop_reviews_on_shop_reviewed_id"
    t.index ["shop_reviewer_id"], name: "index_shop_reviews_on_shop_reviewer_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "shop_name", null: false
    t.bigint "owner_id", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_shops_on_owner_id"
    t.index ["shop_name"], name: "index_shops_on_shop_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "watchlist", default: [], array: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "listings", "categories"
  add_foreign_key "listings", "makes"
  add_foreign_key "listings", "shops", column: "lister_id"
  add_foreign_key "models", "makes"
  add_foreign_key "shop_reviews", "shops", column: "shop_reviewed_id"
  add_foreign_key "shop_reviews", "users", column: "shop_reviewer_id"
  add_foreign_key "shops", "users", column: "owner_id"
end
