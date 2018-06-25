require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'Associations' do
    it { expect have_and_belong_to_many(:teams) }
    it { expect have_and_belong_to_many(:sports) }
  end

  describe 'participation' do

    before do
      org = Organization.create({name: FFaker::Company.name})
      @sport = Sport.create({name: 'Baseball', icon_name: 'baseball-ball'})
      @team = Team.create({
                            name: FFaker::Education.school_name,
                            sport: @sport,
                            organization: org
      })
      @user = User.create({
                            first_name: FFaker::Name.first_name,
                            teams: [@team],
                            sports: [@sport]
      })
    end

    it 'by_sport' do
      event = Event.create([
                             {event_date: FFaker::Time.between(5.months.ago, 2.days.ago).change({min: 0, sec: 0}),
                              duration_minutes: 40,
                              teams: [@team]},
                             {event_date: FFaker::Time.between(5.months.ago, 2.days.ago).change({min: 0, sec: 0}),
                              duration_minutes: 50,
                              teams: [@team]}
      ])
      expected_output = [{"id"=>@sport.id, "name"=>@sport.name, "minutes"=>90}]
      expect(@user.participation_by_sport.as_json).to eq(expected_output)
    end

    it 'by_team' do
      event = Event.create([
                             {event_date: FFaker::Time.between(5.months.ago, 2.days.ago).change({min: 0, sec: 0}),
                              duration_minutes: 100,
                              teams: [@team]},
                             {event_date: FFaker::Time.between(5.months.ago, 2.days.ago).change({min: 0, sec: 0}),
                              duration_minutes: 50,
                              teams: [@team]}
      ])
      expected_output = [{"id"=>@team.id, "name"=>@team.name, "minutes"=>150}]
      expect(@user.participation_by_team.as_json).to eq(expected_output)
    end

  end

end
