import React from 'react'


import CreateRetail from "./CreateRetail";

function RetailsList({ handleNewRetail, deleteRetail, allRetails}){

    return(
        <div>
            <CreateRetail handleNewRetail={handleNewRetail}/>
            {allRetails.map((retail, index) => 
            <div key={index}>
                <p>{retail.retail_name}<button onClick={()=>deleteRetail(retail)}>remove</button></p>
                
            </div>
            )}
        </div>
    )
}
export default RetailsList