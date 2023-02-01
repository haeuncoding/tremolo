json.id user.id
json.email user.email
json.username user.username
json.shop_name user.shop_name
json.watchlist user.watchlist
json.cart user.cart do |listing|
  json.partial! "api/listings/listing", listing: listing
end
json.created_at user.created_at
json.updated_at user.updated_at