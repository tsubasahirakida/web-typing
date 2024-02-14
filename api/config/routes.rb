Rails.application.routes.draw do
  resources :web_quizzes, only: [:index]
end
