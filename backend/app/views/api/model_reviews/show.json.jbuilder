json.model_review do
  json.extract! @model_review, :id, :model_reviewer_id, :model_reviewed_id, :rating, :description, :created_at, :updated_at
end