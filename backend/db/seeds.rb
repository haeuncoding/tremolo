# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Listing.destroy_all
  ModelReview.destroy_all
  ShopReview.destroy_all
  Shop.destroy_all
  Model.destroy_all
  Make.destroy_all
  Category.destroy_all
  User.destroy_all
  

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('categories')
  ApplicationRecord.connection.reset_pk_sequence!('makes')
  ApplicationRecord.connection.reset_pk_sequence!('models')
  ApplicationRecord.connection.reset_pk_sequence!('shops')
  ApplicationRecord.connection.reset_pk_sequence!('shop_reviews')
  ApplicationRecord.connection.reset_pk_sequence!('model_reviews')
  ApplicationRecord.connection.reset_pk_sequence!('listings')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  demo_user = User.create!(
    username: 'Demo-n-User', 
    email: 'daemon@user', 
    password: 'daemon'
  )

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  # Shops

  demo_shop = Shop.create!(
    shop_name: "Khajit Has Wares",
    owner_id: demo_user[:id],
    location: "Who can say?"
  )

  demo_shop_2 = Shop.create!(
    shop_name: "Bluth's Original Frozen Banana Stand",
    owner_id: 3,
    location: "Newport Beach, CA"
  )

  demo_shop_3 = Shop.create!(
    shop_name: "Portillo's",
    owner_id: 5,
    location: "Chicago, IL"
  )

  demo_shop_4 = Shop.create!(
    shop_name: "Cloud 9",
    owner_id: 8,
    location: "Ozark Highlands, OK"
  )

  demo_shop_5 = Shop.create!(
    shop_name: "JJ's Diner",
    owner_id: 10,
    location: "Pawnee, IN"
  )

  puts "Seeding makes and categories..."
  
  CATEGORIES = [
    "Guitars",
    "Basses",
    "Pedals",
    "Amplifiers",
    "Keyboards and Synths",
    "Percussion",
    "Recording",
    "Pro Audio"
  ]

  MAKES = [
    "Schocter",
    "Chise Blass",
    "Peacewick",
    "Bender",
    "Esquire",
    "ESPN",
    "Built",
    "Hackson",
    "Hibanez",
    "PPRS",
    "Ernie Balls",
    "L&G",
    "Maris",
    "Manatee Audio",
    "Damedesh Effects",
    "Emerald",
    "Shore",
    "Tailor",
    "Mortin",
    "Chibson",
    "Pickennosebacher",
    "Done-able",
    "Sir",
    "Mayonnaise",
    "Mustard",
    "Mahyama",
    "Epipen",
    "BEE-VH",
    "Greta",
    "Goldtone",
    "Danelectrical",
    "See More Duncan",
    "D'evilico",
    "Holograph",
    "Heeley",
    "Chief",
    "Lightglass",
    "Fastdano",
    "Stymron",
    "Tesco",
    "STRN FX",
    "Jupiterworks",
    "New Blood Quiet Endeavors",
    "Farmer Pedals",
    "New Neighbor Audio",
    "Jay HS Audio",
    "Oddtide",
    "Worldwide Audio",
    "Wompler",
    "OceanShaker Devices",
    "Life by Audio",
    "Pretty Small Audio",
    "Earthman",
    "Line 7",
    "Electric Harmonics",
    "Digital Technology",
    "ClearSkyGer FX",
    "Minon",
    "Multivox",
    "Fox",
    "Rollahnd",
    "Camper",
    "Brain DSP",
    "Borg",
    "Adolescent Engineering",
    "Arthuria",
    "Indigenous Instruments",
    "Immutable Instruments",
    "Moom",
    "Electron",
    "Acai",
    "Erica, is that you?",
    "LeBay",
    "Spectator",
    "Carvel",
    "Doner",
    "Beavey",
    "Dingfloor",
    "Keesell",
    "Megator",
    "Sean",
    "Balleger",
    "MineL",
    "Saybee And",
    "Dee Double You",
    "Van Beethoven",
    "Tampa",
    "Zilchan",
    "Toothpaiste",
    "Purrl",
    "Evens",
    "Nemo"
  ]

  MODELS = [
    "S Shape",
    "T Shape",
    "Warrior",
    "Mira"
  ]

  # CATEGORIES.each do |category| 
  #   Category.create!({
  #     category: category
  #   })
  # end

  # MAKES.each do |make|
  #   Make.create!({
  #     brand_name: make
  #   })
  # end

  # MODELS.each do |model|
  #   Model.create!({
  #     model: model,
  #     make_id: 2,
  #   })
  # end

  puts '---------------'
  puts 'DEMO USER CREATION VERIFICATION'
  puts 'demo user object:'
  puts demo_user
  puts 'demo user id:'
  puts demo_user[:id]
  puts '---------------'
  # demo_user[:id]

  # puts "Creating listings..."
  # Listing.create!({
  #   lister_id: demo_shop[:id],
  #   make_id: 4,
  #   model_id: 1,
  #   category_id: 1,
  #   listing_title: "Demo Model Stratocaster Placid Lake Blue",
  #   condition: "Good",
  #   price: "650.20",
  #   location: demo_shop[:location],
  #   year_made: "2010s",
  #   description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  # })

  # Listing.create!({
  #   lister_id: demo_shop_2[:id],
  #   make_id: 2,
  #   model_id: 3,
  #   category_id: 1,
  #   listing_title: "Demo Model Partscaster Blood Red",
  #   condition: "Good",
  #   price: "650.20",
  #   location: demo_shop_2[:location],
  #   year_made: "2010s",
  #   description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  # })

  # Listing.create!({
  #   lister_id: demo_shop_3[:id],
  #   make_id: 4,
  #   model_id: 2,
  #   category_id: 4,
  #   listing_title: "Demo Model Partscaster Poison Green",
  #   condition: "Good",
  #   price: "650.20",
  #   location: demo_shop_3[:location],
  #   year_made: "2010s",
  #   description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  # })

  # Listing.create!({
  #   lister_id: demo_shop_4[:id],
  #   make_id: 3,
  #   model_id: 4,
  #   category_id: 1,
  #   listing_title: "Demo Model Partscaster Orange Orange",
  #   condition: "Good",
  #   price: "650.20",
  #   location: demo_shop_4[:location],
  #   year_made: "2010s",
  #   description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  # })

  # Listing.create!({
  #   lister_id: demo_shop_5[:id],
  #   make_id: 2,
  #   model_id: 1,
  #   category_id: 1,
  #   listing_title: "Demo Model Partscaster Orange Orange",
  #   condition: "Good",
  #   price: "650.20",
  #   location: demo_shop_5[:location],
  #   year_made: "2010s",
  #   description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  # })

  puts "Done!"
end