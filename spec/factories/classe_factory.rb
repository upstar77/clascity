FactoryGirl.define do
  factory :classe do
    title 'Swimming class'
    description 'Learn how to swim with a great teacher'
    experience :exp_2
    certified false
    tag_names 'sport swim pool swimming'
    association :teacher, factory: :user

    transient do
      with_location true
    end

    after(:create) do |classe, evaluator|
      create(:location, classe: classe) if evaluator.with_location
    end
  end
end
