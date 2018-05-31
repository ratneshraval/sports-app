class Team < ApplicationRecord

  belongs_to :sport
  belongs_to :organization

  has_many :users
end
