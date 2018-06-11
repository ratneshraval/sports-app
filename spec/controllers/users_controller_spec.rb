require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe 'GET index' do

    it 'gets all' do
      user = User.create({first_name: FFaker::Name.first_name})
      get :index, format: :json

      user_serialized = UserSerializer.new(user).as_json
      expect(JSON.parse(response.body).as_json).to eq([user_serialized].as_json)
      expect(response.status).to eq(200)
    end
  end

  describe 'GET show' do
    before do
      org = Organization.create({name: FFaker::Company.name})
      @sport = Sport.create({name: 'Baseball', icon_name: 'baseball-ball'})
      @team = Team.create({
                            name: FFaker::Education.school_name,
                            sport: @sport,
                            organization: org
      })
      @user = User.create({
                            first_name: FFaker::Name.first_name,
                            teams: [@team],
                            sports: [@sport],
                            is_public: true
      })
    end

    it 'returns user json' do
      get :show, params: {id: @user.id}, format: :json

      user_serialized = ActiveModelSerializers::SerializableResource.new(@user, {serializer: UserSerializer, include: ['teams.*', 'sports']}).as_json

      expect(JSON.parse(response.body)).to eq(user_serialized.as_json)
    end
  end
end
