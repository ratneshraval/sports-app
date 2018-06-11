class UserSerializer  < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer

  # set_type :user
  attributes :id, :first_name, :last_name, :email, :height, :weight, :is_public

  has_many :teams
  has_many :sports
end
