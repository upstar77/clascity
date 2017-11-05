class AddPrivateToClasses < ActiveRecord::Migration[5.1]
  def change
    add_column :classes, :private, :boolean
  end
end
