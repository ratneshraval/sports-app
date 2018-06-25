require 'rails_helper'

RSpec.describe Sport, type: :model do

  describe 'Associations' do
    it { expect have_many(:teams) }
    it { expect have_and_belong_to_many(:users) }
  end

end
