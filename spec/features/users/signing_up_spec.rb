require "rails_helper"

RSpec.feature "Users can sign up" do
  scenario "when providing valid details" do
    visit "/"
    click_link "Sign up"
    fill_in "Email", with: "test@example.com"
    fill_in "user_password", with: "password"
    fill_in "Password confirmation", with: "password"
    fill_in "First name", with: "Dale"
    fill_in "Last name", with: "Cooper"
    fill_in "Phone", with: "+1 33 33 33 33"
    select "1954", from: "user_birthday_1i"
    select "April", from: "user_birthday_2i"
    select "19", from: "user_birthday_3i"
    select "Canada", from: "user_country_code"
    fill_in "City", with: "Twin Peaks"

    click_button "Sign up"
    expect(page).to have_content("You have signed up successfully.")
  end
end
