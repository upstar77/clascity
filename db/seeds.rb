# rubocop:disable Rails/Output
# rubocop:disable UselessAssignment
#
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Users
user1 = User.create! first_name: 'John',
                     last_name: 'Doe',
                     email: 'john@gmail.com',
                     password: 'helloworld',
                     password_confirmation: 'helloworld',
                     country_code: 'CA',
                     city: 'vancouver',
                     phone: '604 604 0002',
                     birthday: '1988-01-01'

user2 = User.create! first_name: 'Jane',
                     last_name: 'Doe',
                     country_code: 'CA',
                     email: 'jane@gmail.com',
                     password: 'helloworld',
                     password_confirmation: 'helloworld',
                     city: 'vancouver',
                     phone: '604 604 0002',
                     birthday: '1988-01-02'

# Classes
class1 = Classe.create! title: 'Swimming class',
                        description: 'Learn how to swim with a great teacher',
                        experience: :exp_2,
                        certified: false,
                        teacher: user1,
                        tag_names: 'sport swim pool swimming'

class2 = Classe.create! title: 'Tennis class',
                        description: 'Learn how to play tennis with a great teacher',
                        experience: :exp_4,
                        certified: false,
                        teacher: user1,
                        tag_names: 'sport tennis'

class3 = Classe.create! title: 'Guitar class',
                        description: 'Learn how to play guitar with a great teacher',
                        experience: :exp_4,
                        certified: true,
                        teacher: user2,
                        tag_names: 'guitar music'

class4 = Classe.create! title: 'Trumpet class',
                        description: 'Learn how to play trumpet with a great teacher',
                        experience: :exp_4,
                        certified: true,
                        teacher: user2,
                        tag_names: 'trumpet music'

# Locations
location1 = Location.create! address: '818 Howe St, Vancouver, BC V6Z 1N4',
                             city: 'Vancouver',
                             postal_code: 'V6Z',
                             state: 'British Columbia',
                             state_code: 'BC',
                             country_code: 'CA',
                             latitude: 49.28151250000001,
                             longitude: -123.1210674,
                             classe: class1

location2a1 = Location.create! address: '778 Robson St, Vancouver, BC V6Z 1A1',
                               city: 'Vancouver',
                               postal_code: 'V6Z',
                               state: 'British Columbia',
                               state_code: 'BC',
                               country_code: 'CA',
                               latitude: 49.2817027,
                               longitude: -123.1206368,
                               classe: class2

location2a2 = Location.create! address: '635 Robson St, Vancouver, BC V6B 5J3',
                               city: 'Vancouver',
                               postal_code: 'V6Z',
                               state: 'British Columbia',
                               state_code: 'BC',
                               country_code: 'CA',
                               latitude: 49.2810806,
                               longitude: -123.1190659,
                               classe: class2

location2a3 = Location.create! address: '10111 Number 3 Rd, Richmond, BC V7A 1W6',
                               city: 'Vancouver',
                               postal_code: 'V7A',
                               state: 'Richmond',
                               state_code: 'BC',
                               country_code: 'CA',
                               latitude: 49.1399295,
                               longitude: -123.1377428,
                               classe: class2

location3 = Location.create! address: '1616 W Georgia St, Vancouver, BC V6G 2V5',
                             city: 'Vancouver',
                             postal_code: 'V6Z',
                             state: 'British Columbia',
                             state_code: 'BC',
                             country_code: 'CA',
                             latitude: 49.2907892,
                             longitude: -123.1315614,
                             classe: class3

location4 = Location.create! address: '2748 Lougheed Hwy, Port Coquitlam, BC V3C 3L8',
                             city: 'Port Coquitlam',
                             postal_code: 'V3C',
                             state: 'British Columbia',
                             state_code: 'BC',
                             country_code: 'CA',
                             latitude: 49.27203369999999,
                             longitude: -122.7897011,
                             classe: class4

puts "Database seeding complete!"
