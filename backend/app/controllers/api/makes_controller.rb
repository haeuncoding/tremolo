class Api::MakesController < ApplicationController

  wrap_parameters include: Make.attribute_names

  def show
    @make = Make.find_by(id: params[:id])
  end

  private

  def make_params
    params.require(:make).permit(:make)
  end
end