class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  
def include_company(object)
  object.to_json(
  include: {
    company: {
      only: [
        :company_name
      ]
    }
  }
)
end

def find_company_id(params)
  company = Company.find_by(company_name: params[:companyName])
  company.id
end

  get '/companies' do
    companies = Company.all
    companies.to_json
  end

  post '/companies' do
    company = Company.create(params)
    company.to_json
  end
  delete '/companies/:id' do
    company = Company.find(params[:id])
    company.destroy
    company.to_json
 
  end

  get "/breweries" do
    include_company(Brewery.all)
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
      company_id: find_company_id(params)
      )
      include_company(breweries)
  end

  patch '/breweries/:id' do
    brewery = Brewery.find(params[:id])
    brewery.update(
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
      company_id: find_company_id(params)
    )
    brewery.to_json
  end

  delete '/breweries/:id' do
    breweries = Brewery.find(params[:id])
    breweries.destroy
    breweries.to_json
  end
end