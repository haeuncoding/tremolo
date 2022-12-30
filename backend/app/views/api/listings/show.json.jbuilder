json.listing do
  json.extract! @listing, :id, :listing_title, :username, :created_at, :updated_at
end