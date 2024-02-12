class CreateWebQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :web_quizzes do |t|
      t.string :title
      t.text :description_ja
      t.text :typing_content

      t.timestamps
    end
  end
end
