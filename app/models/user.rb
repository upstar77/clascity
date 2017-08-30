class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :first_name, :last_name, :country_code, :city

  # Avatar
  mount_uploader :avatar, AvatarUploader

  validates_integrity_of :avatar
  validates_processing_of :avatar

  # City
  before_save :downcase_city

  def downcase_city
    self.city = self.city.downcase
  end
end
