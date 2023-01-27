json.user do
  json.partial! "api/users/user", user: @user
end

# json.watchlist do 
#   @user.watchlist.each do |watched_listing|
#     json.set! watched_listing.id do 
#       json.partial! "api/listings/listing", listing: watched_listing
#     end
#   end
# end

# json.cart do 
#   @user.cart.each do |cart_listing|
#     json.set! cart_listing.id do 
#       json.partial! "api/listings/listing", listing: cart_listing
#     end
#   end
# end