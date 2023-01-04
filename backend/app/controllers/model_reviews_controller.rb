class Api::ModelReviewsController < ApplicationController

before_action :require_logged_in, only: [:create, :update, :destroy]
  def create
    @model_review = ModelReview.new(model_review_params)
      if @model_review.save
        render :show
      else
        render json: [errors: @model_review.errors.full_messages]
      end
  end

  def show
    @model_review = ModelReview.find_by(id: params[:id])
  end

  def update
    @model_review = ModelReview.find_by(id: params[:id])
    if current_user.id === @model_review.model_reviewer_id
      if @model_review.update(model_review_params)
        redirect_to model_url(@model_review.model_reviewed_id)
      else
        flash[:errors] = @model_review.errors.full_messages
        redirect_to model_url(@model_review.model_reviewed_id)
      end
    end
  end

  def destroy
    @model_review = ModelReview.find_by(id: params[:id])
    if current_user.id === @model_review.model_reviewer_id
      @model_review.delete
        redirect_to model_url(@model_review.model_reviewed_id)
    end
  end

  private

  def model_review_params
    params.require(:model_review).permit(:model_reviewer_id, :model_reviewed_id, :rating, :description)
  end

end