class Location < ApplicationRecord
  validates :address,      presence: true
  validates :city,         presence: true
  validates :postal_code,  presence: true
  validates :country_code, presence: true
  validates :latitude,     presence: true
  validates :longitude,    presence: true

  belongs_to :classe

  acts_as_geolocated lat: 'latitude', lng: 'longitude'
end
