Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do 
      patch :updatecart, to: 'users#update_cart', as: 'update_cart' 
      patch :updatewatchlist, to: 'users#update_watchlist', as: 'update_watchlist'
      resources :listings
    end

    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:index, :create, :show, :update, :destroy]
    resources :model_reviews, only: [:index, :create, :show, :update, :destroy]
    resources :shops, only: [:index, :create, :show, :update, :destroy]
    resources :shop_reviews, only: [:index, :create, :show, :update, :destroy]
    resources :categories, only: [:index, :show]
    resources :models, only: [:index, :create, :show]
    resources :makes, only: [:index, :show]
  end

  get '*path', to: 'static_pages#frontend'
end
