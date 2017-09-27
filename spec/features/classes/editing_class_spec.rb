require "rails_helper"

RSpec.feature "Users can edit existing classes" do
  describe "when not logged in" do
    let(:teacher) { FactoryGirl.create(:user) }
    let(:user) { FactoryGirl.create(:user) }
    let(:classe) { FactoryGirl.create(:classe, teacher: user) }

    scenario "refused" do
      visit edit_classe_path(classe)
      expect(page.current_path).to eq root_path
      expect(page).to have_content "You aren't allowed to do that."
    end
  end
end
