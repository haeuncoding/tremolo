json.shop_review do
  json.extract! @shop_review, :id, :shop_reviewer_id, :shop_reviewed_id, :rating, :description, :created_at, :updated_at
end