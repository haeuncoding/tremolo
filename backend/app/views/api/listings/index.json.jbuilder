json.listings do
  json.extract! @listings, :id, :listing_title, :created_at, :updated_at
end