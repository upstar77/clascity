class Location < ApplicationRecord
  # TODO: after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

  # TODO: Restore some of that
  # validates_presence_of :address, :city, :postal_code, :state_code,
  #  :country_code, :latitude, :longitude

  belongs_to :classe

  # TODO: Remove
  attr_accessor :raw_address
end
