Rails.application.routes.draw do

  resources :cities do
    get :autocomplete, on: :collection
    get :filter, on: :collection
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Almost every application defines a route for the root path ("/") at the top of this file.
  root "cities#index"
end
