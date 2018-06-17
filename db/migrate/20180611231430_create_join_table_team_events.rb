class CreateJoinTableTeamEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :event_participations do |t|

      t.references :event, foreign_key: true
      t.references :team, foreign_key: true, index: true

    end

  end
end
