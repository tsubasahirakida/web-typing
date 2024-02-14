class WebQuizzesController < ApplicationController
  def index
    quizzes = WebQuiz.order("RAND()").limit(5)
    render json: quizzes
  end
end
