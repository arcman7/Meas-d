class AddColumnsToLayouts < ActiveRecord::Migration
  def change
    add_column :layouts, :filename, :string
    add_column :layouts, :name, :string
    add_column :layouts, :mime_type, :string
  end
end
