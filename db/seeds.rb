# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

states = {
  'IL': ['Chicago', 'Springfield', 'Rockford', 'Albion', 'Belleville', 'Joliet'],
  'NY': ['Buffalo', 'Yonkers', 'New York', 'Rochester', 'Poughkeepsie', 'Albany', 'Syracuse', 'Long Beach'],
  'FL': ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Tallahassee', 'Key West', 'Fort Lauderdale', 'Palm Beach'],
  'CA': ['Los Angeles', 'San Francisco', 'San Diego', 'Monterey', 'Sacramento', 'Mountain View', 'Oakland', 'San Jose'],
  'MA': ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'New Bedford', 'Lowell']
}

City.delete_all

states.each do |state, cities|
  cities.each do |city|
    City.create!(name: city, state: state)
  end
end