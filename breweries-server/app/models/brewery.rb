class Brewery < ActiveRecord::Base
    has_many :wholesales
    has_many :retails, through: :wholesales
end