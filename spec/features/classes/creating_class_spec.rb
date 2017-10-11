require "rails_helper"

RSpec.feature "Users can create new classes" do
  describe "when not logged in" do
    scenario "refused" do
      visit "/classes/new"
      expect(page.current_path).to eq root_path
      expect(page).to have_content "You aren't allowed to do that."
    end
  end

  describe "when logged in" do
    before do
      login_as(FactoryGirl.create(:user))
      visit "/"
      click_link "Create a class"
    end

    scenario "with valid attributes" do
      fill_in "Title", with: "New Class"
      fill_in "Description", with: "A New Classe for everyone"
      select "1 year", from: "classe_experience"
      select "No", from: "classe_certified"

      # fill_in "Address", with: "14 Main Street"
      # fill_in "City", with: "Vancouver"
      # fill_in "Postal code", with: "V6GGGG"
      # fill_in "State", with: "BC"
      # select "Canada", from: "classe_locations_attributes_0_country_code"

      click_button "Submit"
      expect(page).to have_content "The class has been created."
      classe = Classe.find_by(title: "New Class")
      expect(page.current_url).to eq classe_url(classe)
    end

    scenario "when providing invalid attributes" do
      click_button "Submit"

      expect(page).to have_content "The class has not been created"
      expect(page).to have_content "can't be blank"
    end
  end
end
