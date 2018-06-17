class Team < ApplicationRecord

  belongs_to :sport
  belongs_to :organization

  has_and_belongs_to_many :users

  has_many :event_participations
  has_many :events, through: :event_participations

end
