require 'rails_helper'

RSpec.describe Classe, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:experience) }
end
