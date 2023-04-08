Rails.application.routes.draw do
  resources :cover_letters
  resources :users

  get '/generate_text', to: 'application#generate_text'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
