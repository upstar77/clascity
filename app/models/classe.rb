class Classe < ApplicationRecord
  extend Enumerize

  enumerize :experience, in: [:exp_1, :exp_2, :exp_3, :exp_4, :exp_5, :exp_10]

  validates :title, presence: true
  validates :description, presence: true, length: { minimum: 10 }
  validates :experience, presence: true
  validates :certified, inclusion: { in: [true, false] }

  # User
  belongs_to :teacher, class_name: 'User'

  # Location
  has_many :locations, inverse_of: :classe, dependent: :destroy
  accepts_nested_attributes_for :locations
  acts_as_geolocated through: :locations

  # Tags
  has_and_belongs_to_many :tags

  def tag_names=(names)
    @tag_names = names
    self.tags = []
    tags_from_tag_names_str(names).each do |name|
      tags << Tag.find_or_initialize_by(name: name)
    end
  end

  def tag_names
    tags.map(&:name).join(' ')
  end

  private

  def tags_from_tag_names_str(names)
    names.downcase.split.uniq
  end
end
