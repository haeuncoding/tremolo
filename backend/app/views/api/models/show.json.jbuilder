json.model do
  json.extract! @model, :id, :make_id, :model, :created_at, :updated_at
end