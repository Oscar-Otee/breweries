class Wholesale < ActiveRecord::Base
    has_many :breweries
    has_many :retails, through: :breweries
end