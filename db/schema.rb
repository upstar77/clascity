# rubocop:disable all
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

ActiveRecord::Schema.define(version: 20171011170041) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "cube"
  enable_extension "earthdistance"
  enable_extension "unaccent"

  create_table "classes", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.bigint "teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "experience"
    t.boolean "certified"
    t.tsvector "tsv_title_description"
    t.index ["teacher_id"], name: "index_classes_on_teacher_id"
  end

  create_table "classes_tags", id: false, force: :cascade do |t|
    t.bigint "tag_id", null: false
    t.bigint "classe_id", null: false
    t.index ["classe_id", "tag_id"], name: "index_classes_tags_on_classe_id_and_tag_id"
    t.index ["tag_id", "classe_id"], name: "index_classes_tags_on_tag_id_and_classe_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.string "country_code"
    t.bigint "classe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
    t.string "state_code"
    t.index "ll_to_earth(latitude, longitude)", name: "locations_earthdistance_ix", using: :gist
    t.index ["classe_id"], name: "index_locations_on_classe_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "phone"
    t.date "birthday"
    t.string "city"
    t.string "country_code"
    t.string "avatar"
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "classes", "users", column: "teacher_id"
  add_foreign_key "locations", "classes"
end
