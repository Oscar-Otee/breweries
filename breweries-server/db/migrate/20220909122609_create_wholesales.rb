class CreateWholesales < ActiveRecord::Migration[7.0]
  def change
    create_table :wholesales do |t|
      t.string :wholesale_name
    end
  end
end
