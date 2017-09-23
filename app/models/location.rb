class Location < ApplicationRecord

  # TODO after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }



  # TODO Restore some of that
  # validates_presence_of :address, :city, :postal_code, :state_code,
  #  :country_code, :latitude, :longitude

  after_validation :geocode

  belongs_to :classe

  attr_accessor :raw_address

  geocoded_by :raw_address do |obj, results|
    byebug
    if geo = results.first
      obj.address       = geo.address
      obj.city          = geo.city
      obj.postal_code   = geo.postal_code
      obj.state_code    = geo.state_code
      obj.country_code  = geo.country_code
      obj.latitude      = geo.latitude
      obj.longitude     = geo.longitude
    end
  end
end
