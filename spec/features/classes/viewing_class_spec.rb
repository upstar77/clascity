require "rails_helper"

RSpec.feature "Users can view classes" do
  let(:user) { FactoryGirl.create(:user) }
  let(:classe) { FactoryGirl.create(:classe, title: "My class", description: "this is the description", teacher: user) }
  before do
    login_as(user)
  end

  scenario "with the class details" do
    visit classe_url(classe)
    expect(page).to have_content "My class"
    expect(page).to have_content "this is the description"
  end
end
