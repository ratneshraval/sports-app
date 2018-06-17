Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'dashboard#welcome'

  resources :organizations, only: [:show]

  namespace :api do
    resources :users, only: [:index, :show], controller: '/users' do
      resources :participations, only: [], controller: '/users/participations' do
        collection do
          get 'by_sport'
          get 'by_team'
        end
      end
    end

  end


  get '*path', to: 'dashboard#welcome', constraints: ->(request) { request.format.html? }

end
