FactoryGirl.define do
  factory :location, aliases: [:vancouver_center] do # Vancouver center on google maps
    address '701 W Georgia St, Vancouver, BC V7Y, Canada' # Downtown
    city 'Vancouver'
    postal_code 'V6Z'
    state 'British Columbia'
    state_code 'BC'
    country_code 'CA'
    latitude 49.2834121
    longitude(-123.1175606)

    trait :howe_vancouver do
      address '818 Howe St, Vancouver, BC V6Z 1N4' # Downtown - 330m from center
      latitude 49.28151250000001
      longitude(-123.1210674)
    end

    trait :robson_vancouver do
      address '778 Robson St, Vancouver, BC V6Z 1A1' # Downtown - 160m from center
      latitude 49.2817027
      longitude(-123.1206368)
    end

    trait :west_georgia_vancouver do
      address '1616 W Georgia St, Vancouver, BC V6G 2V5' # Downtown - 1.30km from center
      latitude 49.2907892
      longitude(-123.1315614)
    end

    trait :richmond do
      address '10111 Number 3 Rd, Richmond, BC V7A 1W6'  # Outside - 16.1km from center
      postal_code 'V7A'
      city 'Richmond'
      latitude 49.1399295
      longitude(-123.1377428)
    end

    trait :coquitlam do
      address '2748 Lougheed Hwy, Port Coquitlam, BC V3C 3L8' # Outside - 23.80km from center
      city 'Port Coquitlam'
      postal_code 'V3C'
      latitude 49.27203369999999
      longitude(-122.7897011)
    end
  end
end
