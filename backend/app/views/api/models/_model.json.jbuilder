json.id model.id
json.make_id model.make_id
json.model model.model


json.model do
  json.extract! @model, :id, :make_id, :model, :created_at, :updated_at
end