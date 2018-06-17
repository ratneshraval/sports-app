class ParticipationSerializer  < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer

  # set_type :user
  attributes :id, :name, :minutes
end
