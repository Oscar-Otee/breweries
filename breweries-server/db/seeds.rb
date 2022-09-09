puts "🌱 Seeding..."

retail1 = Retail.create(retail_name: 'Universe')
retail2 = Retail.create(retail_name: 'Popcon')
retail3 = Retail.create(retail_name: 'Peza')
retail4 = Retail.create(retail_name: 'Pale')
retail5 = Retail.create(retail_name: 'Poch')
retail6 = Retail.create(retail_name: 'Eucalptus')
retail7 = Retail.create(retail_name: 'Phozi')

wholesale1 = Wholesale.create(wholesale_name: 'Everything is Fine')
wholesale2 = Wholesale.create(wholesale_name: 'Think Twice')
wholesale3 = Wholesale.create(wholesale_name: 'Come Slow')
wholesale4 = Wholesale.create(wholesale_name: 'Everything on Offer')
wholesale5 = Wholesale.create(wholesale_name: 'At Your Price')
wholesale6 = Wholesale.create(wholesale_name: 'One Touch')
wholesale7 = Wholesale.create(wholesale_name: 'Always You Win')

response = RestClient.get 'https://api.openbrewerydb.org/breweries'
breweries = JSON.parse(response)
breweries.each do |brewery|
new_brewery = Brewery.create(
name: brewery['name'],
brewery_type: brewery['brewery_type'],
street: brewery['street'],
city: brewery['city'],
state: brewery['state'],
postal_code: brewery['postal_code'],
country: brewery['country'],
longitude: brewery['longitude'],
latitude: brewery['latitude'],
phone: brewery['phone'],
retail_id: rand(1..7),
wholesale_id: rand(1..7)
)
end


puts "✅ Done seeding!"
