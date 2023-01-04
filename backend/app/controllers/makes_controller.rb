class Api::MakesController < ApplicationController

  def show
    @make = Make.find_by(id: params[:id])
  end

  private

  def make_params
    params.require(:make).permit(:make)
  end
end