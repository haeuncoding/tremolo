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
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  demo_user = User.create!(
    username: 'Demo-ness-of-the-deep', 
    email: 'demoness@ofthe.deep', 
    password: 'demoofthedeep'
  )

  # More users
  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Seeding makes and categories..."
  
  CATEGORIES = [
    "Guitar",
    "Bass",
    "Pedal",
    "Amplifier",
    "Keyboard",
    "Synth",
    "Recording",
    "Pro Audio",
    "Drums"
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
    "Dangroundo",
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

  CATEGORIES.each do |category| 
    Category.create!({
      category: category
    })
  end

  MAKES.each do |make|
    Make.create!({
      brand_name: make
    })
  end

  puts '---------------'
  puts 'DEMO USER CREATION VERIFICATION'
  puts 'demo user object:'
  puts demo_user
  puts 'demo user id:'
  puts demo_user[:id]
  puts '---------------'

  puts "Creating listings..."
  Listing.create!({
    lister_id: demo_user,
    make_id: 4,
    category_id: 1,
    listing_title: "Demo Model Stratocaster Placid Lake Blue",
    condition: "Good",
    price: "650.20",
    location: "Chicago, IL",
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  puts "Done!"
end