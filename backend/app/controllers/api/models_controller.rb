class Api::ModelsController < ApplicationController

wrap_parameters include: Model.attribute_names

before_action :require_logged_in, only: [:create]
  def create
    @model = Model.new(model_params)
      if @model.save
        render :show
      else
        render json: [errors: @model.errors.full_messages]
      end
  end

  def show
    @model = Model.find_by(id: params[:id])
  end

  private

  def model_params
    params.require(:model).permit(:make_id, :model)
  end

end