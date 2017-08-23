class CreateJoinTableTagsClasses < ActiveRecord::Migration[5.1]
  def change
    create_join_table :tags, :classes do |t|
      t.index [:tag_id, :classe_id]
      t.index [:classe_id, :tag_id]
    end
  end
end
