class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :country_code

      t.references :classe, index: true, foreign_key: true

      t.timestamps
    end
  end
end
