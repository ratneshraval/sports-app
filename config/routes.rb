Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'users#dashboard'

  resources :organizations, only: [:show]

  resources :users, only: [:dashboard]

  namespace :api do
    resources :users, only: [:index, :show], controller: '/users'
  end


  get '*path', to: 'users#dashboard', constraints: ->(request) { request.format.html? }

end
