Brewery Industry
Welcome to Brewery Industry, a program that brings to you all the breweries and their retails.

The program will provide information about the details of the brewery such as name, brewer-type, street, city, state, postal-code, country, longitude, latitude and phone number of the Brewery. It also provides the details of the retailers in the industry

User Stories
User can view all the information of the brewery such as name, brewer-type, street, city, state, postal-code, country, longitude, latitude and phone number of the Brewery.

User can create a brewery and add the brewery to the list of other breweries
User can delete the brewery from the list of breweries

User can create and add a retail to the list of other retails.
User can delete the retal from the list of retails

Enviroment Set-up
Enter the following commands to have the program running

$ bundle install

Then run the migrations

bundle exec rake db:migrate

Seed the Database

bundle exec rake db:seed

Finally, run the server

rake server

Find the frontend Repository here

https://github.com/Oscar-Otee/breweries/tree/main/breweries-client

After running the backend, you will then run the front end directory and start the server

npm start

We are set to go!!