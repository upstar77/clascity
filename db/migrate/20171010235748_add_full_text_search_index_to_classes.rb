# rubocop:disable all
class AddFullTextSearchIndexToClasses < ActiveRecord::Migration[5.1]
  def change
#  This add a column to index title and description for full text search
#  however SQL commands are not played by schema.rb, It should be moved to
#   schema.sql.
#
#  See https://github.com/Casecommons/pg_search#using-tsvector-columns
#  And https://github.com/Casecommons/pg_search/wiki/Building-indexes
#
#    add_column :classes, :tsv_title_description, :tsvector
#    add_index :classes, :tsv_title_description, using: 'gin'
#
#    say_with_time("Adding trigger function on posts for updating tsv_body column") do
#
#sql = <<MIGRATION
#  CREATE TRIGGER tsvectorupdate BEFORE INSERT OR UPDATE
#  ON classes FOR EACH ROW EXECUTE PROCEDURE
#  tsvector_update_trigger(tsv_body, 'pg_catalog.simple', body);
#        tsvector_update_trigger('tsv_title_description', 'pg_catalog.english', title, description);
#MIGRATION
#
#  execute(sql)
  end
end
