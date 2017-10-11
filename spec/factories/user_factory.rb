FactoryGirl.define do
  factory :user do
    sequence(:email) { |n| "john-doe#{n}@gmail.com" }
    password "helloworld"
    first_name 'John'
    last_name 'Doe'
    country_code 'CA'
    city 'vancouver'
    phone '604 604 0001'
    birthday '1988-01-01'
  end
end
