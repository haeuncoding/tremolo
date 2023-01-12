json.listing do
  json.partial! "api/listings/listing", listing: @listing
end

json.reviews do 
  @listing.model.model_reviews.each do |model_review|
    json.set! model_review.id do 
      json.partial! "api/model_reviews/model_review", model_review: model_review
    end
  end
end
