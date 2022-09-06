import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import CreateBrewery from './CreateBrewery.js'

function Brewery({allCompanies}){
    
    const [breweries, setBreweries] = useState([])

    useEffect(()=>{
      fetch("http://localhost:9292/breweries")
      .then((r) => r.json())
      .then(breweries => setBreweries(breweries))
    },[])

    function deleteBrewery({id}){
        setLaunches(breweries.filter(brewery => brewery.id !== id))
        fetch(`http://localhost:9292/breweries/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }

    // function defineSuccess(launchSuccess){
    //  if(launchSuccess === true){
    //        return 'Lift off was successful'
    //     }else if(launchSuccess === false){
    //        return 'Rocket failed to lift off'
    //     }
    // }

    function addBrewery(newBrewery){ 
        setBreweries([...breweries, newBrewery])
    }

return(
    <div>
       <CreateBrewery addBrewery={addBrewery} allCompanies={allCompanies}/>
       {breweries.map((brewery, index)=>
         <div key={index}>
            <p><strong>Name: </strong>{brewery.name}</p>
            <p><strong>Brewery Type:</strong>{brewery.brewery_type}</p>
            <p><strong>Street:</strong> {brewery.street}</p>
            <p><strong>City:</strong> {brewery.city}</p>
            <p><strong>state: </strong>{brewery.state}</p>
            <p><strong>Postal Code:</strong>{brewery.postal_code}</p>
            <p><strong>Country:</strong> {brewery.country}</p>
            <p><strong>Longititude:</strong> {brewery.longitude}</p>
            <p><strong>Latitude:</strong> {brewery.latitude}</p>
            <p><strong>Phone:</strong> {brewery.phone}</p>
            <p><strong>Company:</strong>{brewery.company.company_name}</p>
            <button onClick={()=>deleteBrewery(brewery)}>Delete Brewery</button>
            <hr></hr>
         </div> 
       )}
    </div>
)
}
export default Brewery