class Api::ListingsController < ApplicationController

  wrap_parameters include: Listing.attribute_names

  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]

  def index 
    # @listings = Listing.apply_filters(params[:category_id], params[:make_id], params[:model_id], params[:shop_id], params[:min_price], params[:max_price])
    @listings = Listing.all
    if @listings
      render :index
    else 
      render {}
    end
  end

  def create
    @listing = Listing.new(listing_params)
      if @listing.save
        render :show
      else
        render json: [errors: @listing.errors.full_messages]
      end
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    render :show
  end

  # def edit
  #   @listing = Listing.find_by(id: params[:id])
  #   render :edit
  # end

  def update
    @listing = Listing.find_by(id: params[:id])
    if current_user.id === @listing.lister_id
      if @listing.update(listing_params)
        render :show
      else
        render json: @listing.errors.full_messages
      end
    end
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    if current_user.id === @listing.lister_id
      @listing.delete
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:lister_id, :make_id, :model_id, :category_id, :listing_title, :condition, :price, :location, :color, :year_made, :description)
  end

end