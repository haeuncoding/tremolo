  json.partial! "api/categories/category", category: @category
end

<<<<<<< HEAD
# json.listings do 
#   @category.listings.each do |listing|
#     json.set! listing.id do 
#       json.partial "api/listings/listing", listing: listing
#     end
#   end
# end
=======
json.listings do 
  @category.listings.each do |listing|
    json.set! listing.id do 
      json.partial "api/listings/listing", listing: listing
    end
  end
end
>>>>>>> parent of 499b33e... my body really cant take anymore rn
