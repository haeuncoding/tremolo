class Api::MakesController < ApplicationController

  wrap_parameters include: Make.attribute_names

  def index
    @makes = Make.all
    render :index
  end

  def show
    @make = Make.find_by(id: params[:id])
    if @make
      render :show
    end
  end

  private

  def make_params
    params.require(:make).permit(:make)
  end
end