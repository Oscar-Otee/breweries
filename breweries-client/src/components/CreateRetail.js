import React from 'react'


function CreateRetail({handleNewRetail}){
    function handleAddRetail(){
        const retail = {
            retail_name: document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value
        }
        console.log(retail)
        document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(1) > label > input[type=text]").value = ''
        
        fetch("http://localhost:9292/retails",{
            method: "POST",
            headers:{
                "content-type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(retail)
        })
        .then(resp => resp.json())
        .then(resp => handleNewRetail(resp))
    }

    
    return(
        <div>
            <h1> Create A Retail</h1>
            <label> Retail Name:
                <input type="text" placeholder="Retail Name"></input>
            </label>
            <button onClick={handleAddRetail}>Add</button>
        </div>
    )
}
export default CreateRetail