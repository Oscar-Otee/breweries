class CreateRetails < ActiveRecord::Migration[7.0]
  def change
    create_table :retails do |t|
      t.string :retail_name
    end
  end
end
