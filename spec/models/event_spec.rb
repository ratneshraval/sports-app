require 'rails_helper'

RSpec.describe Event, type: :model do
  describe 'Associations' do
    it { expect have_many(:event_participations) }
    it { expect have_many(:teams) }
  end
end
