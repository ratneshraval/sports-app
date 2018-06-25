require 'rails_helper'

RSpec.describe Organization, type: :model do
  describe 'Associations' do
    it { expect have_many(:teams) }
  end

  describe 'participation' do
    before do
      @org = Organization.create({name: FFaker::Company.name})
      sport = Sport.create({name: 'Baseball', icon_name: 'baseball-ball'})
      @team = Team.create({
                            name: FFaker::Education.school_name,
                            sport: sport,
                            organization: @org
      })
    end

    it 'by_team' do
      event = Event.create([
                             {event_date: FFaker::Time.between(5.months.ago, 2.days.ago).change({min: 0, sec: 0}),
                              duration_minutes: 40,
                              teams: [@team]},
                             {event_date: FFaker::Time.between(5.months.ago, 2.days.ago).change({min: 0, sec: 0}),
                              duration_minutes: 50,
                              teams: [@team]}
      ])

      expected_output = [{"id"=>@team.id, "name"=>@team.name, "minutes"=>90}]
      expect(@org.participation_by_team.as_json).to eq(expected_output)
    end
  end

end
