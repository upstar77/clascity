class Classe < ApplicationRecord
  extend Enumerize
  attr_accessor :tag_names

  belongs_to :teacher, class_name: "User"
  has_and_belongs_to_many :tags

  enumerize :experience, in: [:exp_1, :exp_2, :exp_3, :exp_4, :exp_5, :exp_10]

  validates :title, presence: true
  validates :description, presence: true, length: {minimum: 10}
  validates :experience, presence: true
  validates :certified, inclusion: { in: [ true, false ] }

  def tag_names=(names)
    @tag_names = names
    self.tags = []
    tags_from_tag_names_str(names).each do |name|
      self.tags << Tag.find_or_initialize_by(name: name)
    end
  end

  def tag_names
    self.tags.map(&:name).join(' ')
  end

  private

  def tags_from_tag_names_str(names)
    names.downcase.split.uniq
  end
end
