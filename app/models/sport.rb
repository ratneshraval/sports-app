class Sport < ApplicationRecord

  has_many :teams
  has_and_belongs_to_many :users

end
