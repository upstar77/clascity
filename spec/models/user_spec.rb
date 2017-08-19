require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:country_code) }
  it { should validate_presence_of(:city) }

  it "city should be saved to lower case" do
    user = FactoryGirl.create(:user)
    user.city = "New York"
    user.save!
    expect(user.city).to eq "new york"
  end
end
