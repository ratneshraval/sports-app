class EventSerializer < ActiveModel::Serializer
  attributes :id, :location, :event_date, :duration_minutes

  has_many :teams
end
