json.category do
  json.partial! "api/categories/category", category: @category
end

# json.listings do 
#   @category.listings.each do |listing|
#     json.set! listing.id do 
#       json.partial "api/listings/listing", listing: listing
#     end
#   end
# end