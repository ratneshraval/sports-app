class Event < ApplicationRecord

  has_many :event_participations
  has_many :teams, through: :event_participations

end
