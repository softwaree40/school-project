class CreateToys < ActiveRecord::Migration[6.0]
  def change
    create_table :toys do |t|
      t.string :name
      t.string :description
      t.string :url

      t.timestamps
    end
  end
end
