class Wholesale < ActiveRecord::Base
    belongs_to :retail
    belongs_to :brewery
end