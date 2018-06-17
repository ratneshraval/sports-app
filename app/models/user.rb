class User < ApplicationRecord
  has_and_belongs_to_many :teams
  has_and_belongs_to_many :sports


  def participation_by_sport(filter_date = 3.years.ago)
    self.teams.
      select('sports.id', 'sports.name', 'sum(events.duration_minutes) as minutes').
      joins(:sport, :events).
      where('events.event_date > ?', filter_date.to_date).
      group('sports.id')
  end

  def participation_by_team(filter_date = 3.years.ago)
    self.teams.
      select('teams.id', 'teams.name', 'sum(events.duration_minutes) as minutes').
      joins(:events).
      where('events.event_date > ?', filter_date.to_date).
      group('teams.id')
  end

end
