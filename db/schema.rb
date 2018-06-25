# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180611231430) do

  create_table "event_participations", force: :cascade do |t|
    t.integer "event_id"
    t.integer "team_id"
    t.index ["event_id"], name: "index_event_participations_on_event_id"
    t.index ["team_id"], name: "index_event_participations_on_team_id"
  end

  create_table "events", force: :cascade do |t|
    t.datetime "event_date"
    t.string "location"
    t.integer "duration_minutes"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sports", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "icon_name"
  end

  create_table "sports_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "sport_id", null: false
    t.index ["user_id", "sport_id"], name: "index_sports_users_on_user_id_and_sport_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.integer "sport_id"
    t.integer "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_teams_on_organization_id"
    t.index ["sport_id"], name: "index_teams_on_sport_id"
  end

  create_table "teams_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "team_id", null: false
    t.index ["user_id", "team_id"], name: "index_teams_users_on_user_id_and_team_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "height"
    t.integer "weight"
    t.boolean "is_public"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
