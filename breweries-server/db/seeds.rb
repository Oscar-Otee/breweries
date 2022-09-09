puts "🌱 Seeding..."

Retail.create(retail_name: 'Universe')
Retail.create(retail_name: 'Popcon')
Retail.create(retail_name: 'Peza')
Retail.create(retail_name: 'Pale')
Retail.create(retail_name: 'Poch')
Retail.create(retail_name: 'Eucalptus')
Retail.create(retail_name: 'Phozi')
Retail.create(retail_name: 'Peroze')
Retail.create(retail_name: 'Pulizer')
Retail.create(retail_name: 'Fitier')
Retail.create(retail_name: 'Peng')
Retail.create(retail_name: 'Pot')

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
retail_id: 1,
)
end



puts "✅ Done seeding!"
