class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  devise :omniauthable, omniauth_providers: [:facebook]

  validates :first_name,   presence: true
  validates :last_name,    presence: true
  validates :country_code, presence: true
  validates :city,         presence: true

  # Avatar
  mount_uploader :avatar, AvatarUploader

  validates_integrity_of :avatar
  validates_processing_of :avatar
  validates :avatar, file_size: { less_than_or_equal_to: 2.megabytes }

  # City
  before_save :downcase_city

  def downcase_city
    self.city = city.downcase
  end

  def self.from_omniauth(auth)
    find_by(provider: auth.provider, uid: auth.uid)
  end

  # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
  def self.new_with_session(params, session)
    super.tap do |user|
      if (data = session['devise.facebook_data']) && session['devise.facebook_data']['info']
        user.provider = session['devise.facebook_data']['provider']
        user.uid = session['devise.facebook_data']['uid']

        user.email = data['email'] if user.email.blank?
        user.first_name = data['first_name'] if user.first_name.blank?
        user.last_name = data['last_name'] if user.last_name.blank?

        bigger_image = data['image'] + '?width=500&height=500'
        user.remote_avatar_url = bigger_image
      end
    end
  end
  # rubocop:enable Metrics/AbcSize, Metrics/MethodLength
end
