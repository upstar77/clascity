class Classe < ApplicationRecord
  belongs_to :teacher, class_name: "User"

  validates :title, presence: true
  validates :description, presence: true, length: {minimum: 10}
end
