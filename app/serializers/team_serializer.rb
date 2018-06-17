class TeamSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer

  # set_type :team
  attributes :id, :name

  belongs_to :sport
  belongs_to :organization

  has_many :users

  has_many :events

end
