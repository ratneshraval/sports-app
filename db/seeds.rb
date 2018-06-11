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

orgs = Organization.create!(
  [
    { name: 'sacramento state'},
    { name: 'UC Davis'}
  ]
)
p 'Created Organizations'

sports = Sport.create!(
  [
    {
      name: 'baseball',
      icon_name: 'baseball'
    },
    {
      name: 'football',
      icon_name: 'football-ball'
    }
  ]
)
p 'Created Sports'

teams = Team.create!(
  [
    {
      name: 'sac soccer',
      sport: sports.first,
      organization: orgs.first
    },
    {
      name: 'sac football',
      sport: sports.second,
      organization: orgs.first
    }
  ]
)
p 'Created Teams'

users = User.create!(
  [
    {
      first_name: 'John',
      last_name: 'Smith',
      email: 'john.smith@gmail.com',
      height: '5\'10',
      weight: '170',
      is_public: true,
      teams: [teams.first],
      sports: [sports.first]
    },
    {
      first_name: 'Mary',
      last_name: 'Lane',
      email: 'mary.lane@gmail.com',
      height: '5\'7',
      weight: '140',
      is_public: false,
      teams: [teams.second],
      sports: [sports.second]
    }
  ]
)
p 'Created Users'
