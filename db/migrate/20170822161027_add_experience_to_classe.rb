class AddExperienceToClasse < ActiveRecord::Migration[5.1]
  def change
    add_column :classes, :experience, :string
  end
end
