puts "🌱 Seeding..."

Retail.create(retail_name: 'Universe')
# 20.times do
#     # create a retail with random data
#     Retail.create(
#       retail_name: Faker::Retail.retail_name
#     )
# end
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
