class Classe < ApplicationRecord
  extend Enumerize

  belongs_to :teacher, class_name: "User"

  enumerize :experience, in: [:exp_1, :exp_2, :exp_3, :exp_4, :exp_5, :exp_10]

  validates :title, presence: true
  validates :description, presence: true, length: {minimum: 10}
  validates :experience, presence: true
  validates :certified, inclusion: { in: [ true, false ] }
end
