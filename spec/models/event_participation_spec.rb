require 'rails_helper'

RSpec.describe EventParticipation, type: :model do
  describe 'Associations' do
    it { expect have_one(:event) }
    it { expect have_one(:team) }
  end
end
