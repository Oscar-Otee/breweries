import React from 'react'


function CreateCompany({handleNewCompany}){
    function handleAddCompany(){
        const company = {
            company_name: document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value
        }
        console.log(company)
        document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value = ''
        
        fetch("http://localhost:9292/companies",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(company)
        })
        .then(resp => resp.json())
        .then(resp => handleNewCompany(resp))
        
    }
    return(
        <div>
            <h1> Create A Sales Company</h1>
            <label> Sales Company Name:
                <input type="text" placeholder="Sales Company Name"></input>
            </label>
            <button onClick={handleAddCompany}>Add</button>
        </div>
    )
}
export default CreateCompany