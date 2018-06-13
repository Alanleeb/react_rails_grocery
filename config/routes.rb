Rails.application.routes.draw do
  namespace :api do
    resources :products
  end

  get '*other', to: 'static#index'
end
