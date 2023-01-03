json.shop do
  json.extract! @shop, :id, :shop_name, :owner_id, :location, :created_at, :updated_at
end