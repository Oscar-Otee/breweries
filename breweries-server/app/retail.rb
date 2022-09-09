class Retail < ActiveRecord::Base
    has_many :wholesales
    has_many :breweries, through: :wholesales
end