class AddEarthdistanceindexToLocations < ActiveRecord::Migration[5.1]
  def up
    add_earthdistance_index :locations, lat: 'latitude', lng: 'longitude'
  end

  def down
    remove_earthdistance_index :locations, lat: 'latitude', lng: 'longitude'
  end
end
