import React from 'react'


import CreateCompany from "./CreateCompany";

function Companies({ handleNewCompany, deleteCompany, allCompanies}){

    return(
        <div>
            <CreateCompany handleNewCompany={handleNewCompany}/>
            {allCompanies.map((company, index) => 
            <div key={index}>
                <p>{company.company_name}<button onClick={()=>deleteCompany(company)}>remove</button></p>
                
            </div>
            )}
        </div>
    )
}
export default Companies