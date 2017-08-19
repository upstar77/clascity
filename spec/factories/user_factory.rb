FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@example.com" }
    password "password"
    first_name 'Dale'
    last_name 'Cooper'
    country_code 'US'
    city 'twin peaks'
    birthday '1954-04-19'
  end
end

