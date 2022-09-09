class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  
def include_retail(object)
  object.to_json(
  include: {
    retail: {
      only: [
        :retail_name
      ]
    }
  }
)
end

def find_retail_id(params)
  retail = Retail.find_by(retail_name: params[:retailName])
  retail.id
end


def find_wholesale_id(params)
  wholesale = Wholesale.find_by(wholesale_name: params[:wholesaleName])
  wholesale.id
end

  get '/retails' do
    retails = Retail.all
    retails.to_json
  end

  post '/retails' do
    retail = Retail.create(params)
    retail.to_json
  end
  delete '/retails/:id' do
    retail = Retail.find(params[:id])
    retail.destroy
    retail.to_json
 
  end

  get '/wholesales' do
    wholesales = Wholesale.all
    wholesales.to_json
  end

  post '/wholesales' do
    wholesale = Wholesale.create(params)
    wholesale.to_json
  end
  delete '/wholesales/:id' do
    wholesale = Wholesale.find(params[:id])
    wholesale.destroy
    wholesale.to_json
 
  end

  get "/breweries" do
    include_retail(Brewery.all)
  end

  post '/breweries' do 
    breweries = Brewery.create(
      name: params[:name], 
      brewery_type: params[:brewery_type], 
      street: params[:street], 
      city: params[:city], 
      state: params[:state], 
      postal_code: params[:postal_code], 
      country: params[:country], 
      longitude: params[:longitude], 
      latitude: params[:latitude], 
      phone: params[:phone], 
      retail_id: find_retail_id(params)
      )
      include_retail(breweries)
  end

  patch '/retails/:id' do
    retail = Retail.find(params[:id])
    retail.update(
      name: params[:name],  
    )
    retail.to_json
  end

  delete '/breweries/:id' do
    breweries = Brewery.find(params[:id])
    breweries.destroy
    breweries.to_json
  end
end