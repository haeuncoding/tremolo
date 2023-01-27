class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']
  before_action :require_logged_in, only: [:update, :update_cart, :update_watchlist]

  def index
    @users = User.all
    if @users
      render :index
    else
      render nil
    end
  end
  
  def create
    @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: [errors: @user.errors.full_messages, status: :unprocessable_entity]
      end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    if current_user.id === @user.id
      if @user.update(user_params)
      else
        flash[:errors] = @user.errors.full_messages
      end
    end
  end

  def update_cart
    @user = User.find_by(id: user_params[:id])
    puts @user
    if current_user.id === @user.id
      if (!@user.cart.include?(user_params[:listing_id]))
        @user.add_to_cart(user_params[:listing_id])
      else 
        @user.remove_from_cart(user_params[:listing_id])
      end
      render :show
    else
      puts [@user, 'i hate everything' ]
    end
  end

  def update_watchlist
    @user = User.find_by(id: params[:user_id])
    if current_user.id === @user.id
      if (!@user.watchlist.include?(user_params[:listing_id]))
        @user.add_to_watchlist(user_params[:listing_id])
      else 
        @user.remove_from_watchlist(user_params[:listing_id])
      end
      render :show
    else
      puts [@user, 'i hate everything' ]
    end
  end
  private

  def user_params
    params.require(:user).permit(:id, :email, :username, :shop_name, :location, :password, :listing_id, watchlist: [], cart: [])
  end

  def get_listing
    @listing = Listing.find(params[:listing_id])
  end

end