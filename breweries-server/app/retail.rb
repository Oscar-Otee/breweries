class Retail < ActiveRecord::Base
    has_many :breweries
    has_many :Wholesales, through: :breweries
end