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
  ModelReview.destroy_all
  ShopReview.destroy_all
  Listing.destroy_all
  User.destroy_all
  Shop.destroy_all
  Model.destroy_all
  Make.destroy_all
  Category.destroy_all

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

  puts "Seeding categories..."
  
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

  CATEGORIES.each do |category| 
    Category.create!({
      category: category
    })
  end

  puts "Seeding makes..."

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

  MAKES.each do |make|
    Make.create!({
      brand_name: make
    })
  end

  puts "Seeding models..."

  GUITAR_MODELS = [
    "S Shape",
    "T Shape",
    "Warrior",
    "Mira",
    "Aries",
    "DC",
    "Vader",
    "Osiris",
    "Zeus",
    "Lyra",
    "K-Series",
    "Theos",
    "Hyperdrive",
    "Lightspeed",
    "Crescent",
    "CT6",
    "Chris Letchford Signature Series",
    "Dan Sugarman Signature Series",
    "Lee McKinney Signature Series",
    "Marc Okubo Signature Series",
    "Scott Carstairs Signature Series",
    "Espada",
    "Jazzmaster",
    "Jaguar",
    "Diablo",
    "Yeti"
  ]

  PEDAL_MODELS = [
    "DOOM",
    "Light World",
    "Travesty",
    "POG2",
    "LOX",
    "MonoMoon",
    "Mercury9",
    "Addiction",
    "Deep 7",
    "Hornwar",
    "Ascent",
    "Years",
    "MOONN O)))",
    "Magmaduct",
    "Avalanche Jog",
    "Dispatch Master",
    "Deceiver"
  ]

  DRUMS = [
    "Kick",
    "Tom",
    "Floor Tom",
    "Snare",
    "Splash",
    "Bell",
    "Hi Hat",
    "Crash",
    "Ride",
    "Crash-Ride"
  ]

  SYNTHS = [
    "OP-Won",
    "Pocket Calc",
    "Boxes",
    "GOOMBA",
    "Joono",
    "PolyMono",
    "SQL-64",
    "Micro-Weird",
    "Sun Mini",
    "Sultan",
    "Father-32"
  ]

  GUITAR_MODELS[0..1].each do |model|
    Model.create!({
      model: model,
      make_id: 4,
      category_id: 1
    })
  end

  GUITAR_MODELS[2..20].each do |model|
    Model.create!({
      model: model,
      make_id: 79,
      category_id: 1
    })
    end

  Model.create!({
    model: GUITAR_MODELS[21],
    make_id: 82,
      category_id: 1
  })


  GUITAR_MODELS[22..23].each do |model|
    Model.create!({
      model: model,
      make_id: 4,
      category_id: 1
    })
  end


  Model.create!({
    model: GUITAR_MODELS[24],
    make_id: 82,
    category_id: 1
  })

  PEDAL_MODELS[0..2].each do |model|
    Model.create!({
      model: model,
      make_id: 2,
      category_id: 3
    })
  end

  Model.create!({
    model: PEDAL_MODELS[3],
    make_id: 55,
    category_id: 3
  })

  PEDAL_MODELS[4..8].each do |model|
    Model.create!({
      model: model,
      make_id: 13,
      category_id: 3
      
    })
  end

  PEDAL_MODELS[9..12].each do |model|
    Model.create!({
      model: model,
      make_id: 14,
      category_id: 3
    })
  end

  PEDAL_MODELS[13...PEDAL_MODELS.length].each do |model|
    Model.create!({
      model: model,
      make_id: 50,
      category_id: 3
    })end
  

  DRUMS[0..3].each do |model|
    Model.create!({
      model: model,
      make_id: 87,
      category_id: 6
    })
  end

  DRUMS[4...DRUMS.length].each do |model|
    Model.create!({
      model: model,
      make_id: 83,
      category_id: 6
    })
  end

  SYNTHS.each do |model|
    Model.create({
      model: model,
      make_id: rand(64..71),
      category_id: 5
    })
  end

  Model.create!({
    model: GUITAR_MODELS[25],
    make_id: 22,
    category_id: 1
  })

  Model.create!({
    model: "NG-7",
    make_id: 78,
    category_id: 2
  })

  
  puts '---------------'
  puts 'DEMO USER CREATION VERIFICATION'
  puts 'demo user object:'
  puts demo_user
  puts 'demo user id:'
  puts demo_user[:id]
  puts '---------------'

  puts "Creating listings..."
  Listing.create!({
    lister_id: demo_shop[:id],
    make_id: 4,
    model_id: 1,
    category_id: 1,
    listing_title: "Stratocaster Placid Lake Blue",
    condition: "Good",
    price: "650.20",
    location: demo_shop[:location],
    year_made: "2010s",
    description: "it's a demo model for the store - but just need a new guitar and looking to swap this one for another one. open to offers!"
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 2,
    model_id: 26,
    category_id: 3,
    listing_title: "Chise Blass DOOM",
    condition: "Good",
    price: "400.00",
    location: demo_shop_2[:location],
    year_made: "2023",
    description: "Koel Jorte gave it to me, with a secret. a sinister secret"
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 2,
    model_id: 28,
    category_id: 3,
    listing_title: "Chise Blass Travesty",
    condition: "Very Good",
    price: "400.00",
    location: demo_shop_2[:location],
    year_made: "2023",
    description: "Koel Jorte gave it to me, with a secret. a sinister secret"
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 13,
    model_id: 33,
    category_id: 3,
    listing_title: "Maris Addiction",
    condition: "Mint",
    price: "500.00",
    location: demo_shop_2[:location],
    year_made: "2023",
    description: "The new pedal or smth, idk man"
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 2,
    model_id: 27,
    category_id: 3,
    listing_title: "Chise Blass Light World",
    condition: "Mint",
    price: "400.00",
    location: demo_shop_2[:location],
    year_made: "2023",
    description: "Comes with a Triforce! best deal you're gonna get."
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 13,
    model_id: 31,
    category_id: 3,
    listing_title: "Maris MonoMoon",
    condition: "Good",
    price: "400.00",
    location: demo_shop_2[:location],
    year_made: "2000",
    description: "I mean that's it. Just one moon. Maybe in another universe there's a Polymoon"
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 13,
    model_id: 30,
    category_id: 3,
    listing_title: "Maris LOX",
    condition: "Poor",
    price: "700.00",
    location: demo_shop_2[:location],
    year_made: "2023",
    description: "It smells like fish... was like that when I got it, funnily enough. OHH IT IS LOX I GET IT NOW I-"
  })

  Listing.create!({
    lister_id: demo_shop_2[:id],
    make_id: 55,
    model_id: 29,
    category_id: 3,
    listing_title: "Electro Harmonics POG2",
    condition: "Poor",
    price: "500.00",
    location: demo_shop_2[:location],
    year_made: "2014",
    description: "The kids these days keep saying POG, i don't get it. i feel like EH should change their name to Electro Harmonix, it'd be so much better for the kids"
  })


  Listing.create!({
    lister_id: demo_shop_3[:id],
    make_id: 79,
    model_id: 5,
    category_id: 1,
    listing_title: "Keesell Aries Red Crackle",
    condition: "Good",
    price: "2650.20",
    location: demo_shop_3[:location],
    year_made: "2010s",
    description: "actually touched by Christ - the crackle finish is what happened when he touched it"
  })

  Listing.create!({
    lister_id: demo_shop_3[:id],
    make_id: 22,
    model_id: 64,
    category_id: 1,
    listing_title: "Done-able Yeti",
    condition: "Excellent",
    price: "3650.20",
    location: demo_shop_3[:location],
    year_made: "2010s",
    description: "comes with an ACTUAL YETI, Sasha from Extronaut has dun it again"
  })

  Listing.create!({
    lister_id: demo_shop_4[:id],
    make_id: 78,
    model_id: 4,
    category_id: 2,
    listing_title: "Dingfloor NG-7",
    condition: "Good",
    price: "3500",
    location: demo_shop_4[:location],
    year_made: "2010s",
    description: "Some bald guy touched it and i don't want it anymore"
  })

  Listing.create!({
    lister_id: demo_shop_5[:id],
    make_id: 4,
    model_id: 24,
    category_id: 1,
    listing_title: "Jag Racing Orange",
    condition: "Good",
    price: "650.20",
    location: demo_shop_5[:location],
    year_made: "2010s",
    description: "came with an actual jaguar. not the car, the animal. was mauled. can't play anymore"
  })

  Listing.create!({
    lister_id: demo_shop_5[:id],
    make_id: 4,
    model_id: 23,
    category_id: 1,
    listing_title: "Jazzmaster Forest Green",
    condition: "Brand New",
    price: "6400.20",
    location: demo_shop_5[:location],
    year_made: "2022s",
    description: "was touched by all the Jazz Masters, BB King, etc. you name it"
  })

  Listing.create!({
    lister_id: demo_shop_5[:id],
    make_id: 4,
    model_id: 2,
    category_id: 1,
    listing_title: "Hello Kitty Tele",
    condition: "Brand New",
    price: "6400.20",
    location: demo_shop_5[:location],
    year_made: "2022s",
    description: "got it for my daughter but she doesn't play with it. says 'she is too old for Hello Kitty', who knew that at age 50 they might not like Hello Kitty?"
  })


  puts "Done!"
end