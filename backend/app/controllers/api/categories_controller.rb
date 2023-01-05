class Api::CategoriesController < ApplicationController
  wrap_parameters include: Category.attribute_names
  
  def index
    @categories = Category.all
    render :index
  end

  def show
    @category = Category.find_by(id: params[:id])
    if @category
      render :show
    end
  end

  private

  def category_params
    params.require(:category).permit(:category)
  end
end