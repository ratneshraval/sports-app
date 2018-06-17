class EventParticipation < ApplicationRecord

  belongs_to :event
  belongs_to :team

end
