class Retail < ActiveRecord::Base
    #has_many :breweries, dependent: :destroy
    has_many :breweries
end