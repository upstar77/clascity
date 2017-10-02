class Location < ApplicationRecord
  validates :address,      presence: true
  validates :city,         presence: true
  validates :postal_code,  presence: true
  validates :state_code,   presence: true
  validates :country_code, presence: true
  validates :latitude,     presence: true
  validates :longitude,    presence: true

  belongs_to :classe
end
