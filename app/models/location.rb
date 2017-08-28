class Location < ApplicationRecord

  validates_presence_of :address, :city, :postal_code, :country_code

  before_save :downcase_values

  belongs_to :classe

  def downcase_values
    self.address = self.address.downcase
    self.city = self.city.downcase
    self.postal_code = self.postal_code.upcase
  end
end
