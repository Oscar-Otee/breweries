import RetailsList from "./RetailList"
import React from 'react'
import BreweryList from "./BreweryList"
import { useState, useEffect } from "react"

function Home(){

    const [allRetails, setRetails] = useState([])

    function handleNewRetail(retail){
        setRetails([...allRetails, retail])
    }
    function deleteRetail({id}){
        setRetails(allRetails.filter(brewery => brewery.id !== id))

        fetch(`http://localhost:9292/retails/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }

    useEffect(()=>{
        fetch("http://localhost:9292/retails")
        .then(resp => resp.json())
        .then(retails => setRetails(retails))
    },[])


    return(
        <div>
          <h1>Universe Brewery Compilation</h1>
          <RetailsList handleNewRetail={handleNewRetail} deleteRetail={deleteRetail} allRetails={allRetails}/>
          <BreweryList allRetails={allRetails}/>
        </div>
    )
}

export default Home