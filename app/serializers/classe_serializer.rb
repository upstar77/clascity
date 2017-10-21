class ClasseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :experience, :certified
  has_one :teacher
  has_many :locations
end
