class Api::CategoriesController < ApplicationController
  def show
    @category = Category.find_by(id: params[:id])
  end

  private

  def category_params
    params.require(:category).permit(:category)
  end
end