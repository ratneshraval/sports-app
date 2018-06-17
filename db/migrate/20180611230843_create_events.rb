class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.datetime :event_date
      t.string :location
      t.integer :duration_minutes
    end
  end
end
