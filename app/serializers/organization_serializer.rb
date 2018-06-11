class OrganizationSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer

  # set_type :organization
  attributes :id, :name

  has_many :teams

end
