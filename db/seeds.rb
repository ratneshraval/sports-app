# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Organization.delete_all
Sport.delete_all
Team.delete_all
User.delete_all

org_names = []
5.times do
  org_names << {name: FFaker::Company.name}
end
orgs = Organization.create!(org_names)
p 'Created Organizations'

sports = Sport.create!(
  [
    {name: 'Baseball', icon_name: 'baseball-ball'},
    {name: 'Football', icon_name: 'football-ball'},
    {name: 'Basketball', icon_name: 'basketball-ball'},
    {name: 'Soccer', icon_name: 'futbol'},
    {name: 'Hockey', icon_name: 'hockey-puck'},
    {name: 'Table Tennis', icon_name: 'table-tennis'}
  ]
)
p 'Created Sports'

team_objects = []
10.times do
  s = sports.sample
  team_objects << {
    name: "#{FFaker::Education.school_name} #{s.name}",
    sport: s,
    organization: orgs.sample
  }
end
teams = Team.create!(team_objects)
p 'Created Teams'

user_objects = []
20.times do
  user_objects << {
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    email: FFaker::Internet.safe_email,
    height: (100...200).to_a.sample,
    weight: (100...200).to_a.sample,
    is_public: [true, false].sample,
    teams: teams.sample([1,2,3].sample),
    sports: sports.sample([1,2,3].sample)
  }
end
users = User.create!(user_objects)
p 'Created Users'
