class CreateLayouts < ActiveRecord::Migration
  def change
    create_table :layouts do |t|
      t.binary :sandbox
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
