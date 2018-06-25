require 'rails_helper'

RSpec.describe Team, type: :model do

  describe 'Associations' do
    it { expect have_one(:sport) }
    it { expect have_one(:organization) }

    it { expect have_and_belong_to_many(:users) }

    it { expect have_many(:event_participations) }
    it { expect have_many(:events) }
  end
end
