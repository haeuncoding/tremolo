json.makes @shops do |shop|
  json.partial! "api/shops/shop", shop: shop
end