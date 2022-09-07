import Companies from "./Company"
import React from 'react'
import Brewery from "./Brewery"
import { useState, useEffect } from "react"

function Home(){

    const [allCompanies, setCompanies] = useState([])

    function handleNewCompany(company){
        setCompanies([...allCompanies, company])
    }
    function deleteCompany({id}){
        setCompanies(allCompanies.filter(brewery => brewery.id !== id))

        fetch(`http://localhost:9292/companies/${id}`,{
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then()
    }

    useEffect(()=>{
        fetch("http://localhost:9292/companies")
        .then(resp => resp.json())
        .then(companies => setCompanies(companies))
    },[])


    return(
        <div>
          <h1>Universe Brewery Compilation</h1>
          <Companies handleNewCompany={handleNewCompany} deleteCompany={deleteCompany} allCompanies={allCompanies}/>
          <Brewery allCompanies={allCompanies}/>
        </div>
    )
}

export default Home