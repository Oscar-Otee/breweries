import React from 'react'


function CreateBrewery({addBrewery, allRetails}){

    
    function handleSubmit (e){
        e.preventDefault()
        const newBrewery = {
            name : e.target[0].value,
            brewery_type: e.target[1].value,
            street: e.target[2].value,
            city : e.target[3].value,
            state: e.target[4].value,
            postal_code: e.target[5].value,
            country : e.target[6].value,
            longitude: e.target[7].value,
            latitude: e.target[8].value,
            phone : e.target[9].value,
            retailName: e.target[10].value
        }
        e.target.reset()
    fetch("http://localhost:9292/breweries",{
        method: "POST",
        headers:{
            "content-type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(newBrewery)
    })
    .then(resp => resp.json())
    .then(resp => addBrewery(resp))
    }


    return(
        <div>
            <h1>Create A Brewery</h1>
          <form onSubmit={handleSubmit}>
            <label> Brewery Name: </label>
                <input type='text' name="breweryName" placeholder='Brewery Name'></input>
            <label> Brewery Type: </label>
                <input type='text' name="breweryType" placeholder='Brewery Type'></input>
            <label> Street: </label>
                <input type='text' name='street' placeholder="Street"></input>
            <label> City: </label>
                <input type='text' name="city" placeholder='City'></input><br></br><br></br>
            <label> State: </label>
                <input type='text' name="state" placeholder='State'></input>
            <label> Postal Code: </label>
                <input type='text' name='postalCode' placeholder="Postal Code"></input>
            <label> Country: </label>
                <input type='text' name="country" placeholder='Country'></input>
            <label> Longitude: </label>
                <input type='text' name="longitude" placeholder='Longitude'></input><br></br><br></br>
            <label> Latitude: </label>
                <input type='text' name='latitude' placeholder="Latitude"></input>
            <label> Phone: </label>
                <input type='text' name="phone" placeholder='Phone'></input>
            {/* <label> Retail Name: </label>
                <select>
                    {allRetails.map((retail, index) => <option key={index}>{retail.retail_name}</option>)}   
                </select>     */}
            <input type='submit'></input>
          </form>
        </div>
    )
}

export default CreateBrewery