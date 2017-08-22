class AddCertifiedToClasse < ActiveRecord::Migration[5.1]
  def change
    add_column :classes, :certified, :boolean
  end
end
