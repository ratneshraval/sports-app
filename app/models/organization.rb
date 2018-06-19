class Organization < ApplicationRecord

  has_many :teams

  def participation_by_team(filter_date = 3.years.ago)
    self.teams.
      select('teams.id', 'teams.name', 'sum(events.duration_minutes) as minutes').
      joins(:events).
      where('events.event_date > ?', filter_date.to_date).
      group('teams.id')
  end

end
