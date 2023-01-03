class Api::ListingsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :edit, :update]

  def create
    @listing = Listing.new(listing_params)
      if @listing.save
        render 'api/listings/show'
      else
        render json: [errors: @listing.errors.full_messages]
      end
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    render 'api/listings/show'
  end

  # def edit
  #   @listing = Listing.find_by(id: params[:id])
  #   render :edit
  # end

  def update
    @listing = Listing.find_by(id: params[:id])
    if current_user.id === @listing.lister_id
      if @listing.update(listing_params)
        redirect_to listing_url(@listing.id)
      else
        flash[:errors] = @listing.errors.full_messages
        redirect_to listing_url(@listing.id)
      end
    end
  end

  def destroy
    @listing = Listing.find_by(id: params[:id])
    if current_user.id === @listing.lister_id
      @listing.delete
      redirect_to user_url(current_user.id)
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:lister_id, :make_id, :category_id, :listing_title, :condition, :price, :location, :color, :year_made, :description)
  end

end