import RetailsList from "./RetailList"
import React from 'react'
import BreweryList from "./BreweryList"
import { useState, useEffect } from "react"

function Home(){

    const [allRetails, setRetails] = useState([])
    const [allWholesales, setWholesales] = useState([])

    function handleNewRetail(retail){
        setRetails([...allRetails, retail])
    }

    function handleNewWholesale(wholesale){
        setWholesales([...allWholesales, wholesale])
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

    useEffect(()=>{
        fetch("http://localhost:9292/wholesales")
        .then(resp => resp.json())
        .then(wholesales => setRetails(wholesales))
    },[])


    return(
        <div style={{background: "pink"}}>
          <h1>Brewery Industry</h1>
          <RetailsList handleNewRetail={handleNewRetail} deleteRetail={deleteRetail} allRetails={allRetails}/>
          <BreweryList allRetails={allRetails} allWholesales={allWholesales}/>
        </div>
    )
}

export default Home