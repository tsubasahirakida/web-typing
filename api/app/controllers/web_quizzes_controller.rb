class WebQuizzesController < ApplicationController
  def index
    quizzes = WebQuiz.order("RANDOM()").limit(5)
    render json: quizzes
  end
end
