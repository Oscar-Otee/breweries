import React from 'react'


function CreateSalesCompany({handleNewSalesCompany}){
    function handleAddSalesCompany(){
        const salesCompany = {
            salesCompany_name: document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value
        }
        console.log(salesCompany)
        document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value = ''
        
        fetch("http://localhost:9292/sales_companies",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(salesCompany)
        })
        .then(resp => resp.json())
        .then(resp => handleNewSalesCompany(resp))
        
    }
    return(
        <div>
            <h1> Create A Sales Company</h1>
            <label> Sales Company Name:
                <input type="text" placeholder="Sales Company Name"></input>
            </label>
            <button onClick={handleAddSalesCompany}>Add</button>
        </div>
    )
}
export default CreateSalesCompany