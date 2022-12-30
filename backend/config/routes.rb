Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:create, :show, :update, :destroy]
    resources :listing_reviews, only: [:create, :show, :destroy]
    resources :shops, only: [:create, :show, :destroy]
    resources :shop_reviews, only: [:create, :show, :destroy]
    resources :categories, only: [:show]
    resources :makes, only: [:show]
  end
end
