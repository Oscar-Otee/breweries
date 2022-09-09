import React from 'react'


import CreateRetail from "./CreateRetail";

function RetailsList({ handleNewRetail, deleteRetail, allRetails}){

    return(
        <div>
            <CreateRetail handleNewRetail={handleNewRetail}/>
            <h2>List of Retailers</h2>
            {allRetails.map((retail, index) => 
            <div key={index}>
                <p>{retail.retail_name}  <button onClick={()=>deleteRetail(retail)}> delete</button></p>
                
            </div>
            )}
        </div>
    )
}
export default RetailsList