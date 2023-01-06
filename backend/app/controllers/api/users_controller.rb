class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']
  before_action :require_logged_in, only: [:update]

  def create
    @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: [errors: @user.errors.full_messages, status: :unprocessable_entity]
      end
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
  
  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :watchlist)
  end

end