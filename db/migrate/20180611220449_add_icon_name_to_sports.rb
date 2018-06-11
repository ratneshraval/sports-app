class AddIconNameToSports < ActiveRecord::Migration[5.1]
  def change
    add_column :sports, :icon_name, :string
  end
end
