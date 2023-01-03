Api::ShopsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]
  def create
    @shop = Shop.new(shop_params)
      if @shop.save
        render :show
      else
        render json: [errors: @shop.errors.full_messages]
      end
  end

  def show
    @shop = Shop.find_by(id: params[:id])
  end

  def update
    @shop = Shop.find_by(id: params[:id])
    if current_user.id === @shop.owner_id
      if @shop.update(shop_params)
        redirect_to shop_url(@shop.id)
      else
        flash[:errors] = @shop.errors.full_messages
        redirect_to shop_url(@shop.id)
      end
    end
  end

  def destroy
    @shop = Shop.find_by(id: params[:id])
    if current_user.id === @shop.owner_id
      @shop.delete
      redirect_to user_url(current_user.id)
    end
  end

  private

  def shop_params
    params.require(:shop).permit(:shop_name, :owner_id, :location)
  end
end