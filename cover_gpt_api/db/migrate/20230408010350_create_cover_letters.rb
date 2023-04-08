class CreateCoverLetters < ActiveRecord::Migration[7.0]
  def change
    create_table :cover_letters do |t|
      t.text :text
      t.references :user, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
