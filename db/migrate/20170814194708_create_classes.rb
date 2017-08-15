class CreateClasses < ActiveRecord::Migration[5.1]
  def change
    create_table :classes do |t|
      t.string :title
      t.text :description
      t.references :teacher, index: true

      t.timestamps
    end

    add_foreign_key :classes, :users, column: :teacher_id
  end
end
