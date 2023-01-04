class Api::ShopReviewsController < ApplicationController

wrap_parameters include: ShopReview.attribute_names

before_action :require_logged_in, only: [:create, :update, :destroy]
  def create
    @shop_review = ShopReview.new(shop_review_params)
      if @shop_review.save
        render :show
      else
        render json: [errors: @shop_review.errors.full_messages]
      end
  end

  def show
    @shop_review = ShopReview.find_by(id: params[:id])
  end

  def update
    @shop_review = ShopReview.find_by(id: params[:id])
    if current_user.id === @shop_review.shop_reviewer_id
      if @shop_review.update(shop_review_params)
        redirect_to shop_url(@shop_review.shop_reviewed_id)
      else
        flash[:errors] = @shop_review.errors.full_messages
        redirect_to shop_url(@shop_review.shop_reviewed_id)
      end
    end
  end

  def destroy
    @shop_review = ShopReview.find_by(id: params[:id])
    if current_user.id === @shop_review.shop_reviewer_id
      @shop_review.delete
        redirect_to shop_url(@shop_review.shop_reviewed_id)
    end
  end

  private

  def shop_review_params
    params.require(:shop_review).permit(:shop_reviewer_id, :shop_reviewed_id, :rating, :description)
  end
end