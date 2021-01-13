import React from "react"
import {Link} from "react-router-dom"

const Dashboard = ({stocks})=>{

    return(
    <div className="dashboard">Dashboard
        <div className="dashboard-header">
            <h2 className="title"> Company Name</h2>
        
        </div>
        <div className="info">
            {stocks.map((stock, index)=>{
                return(
                    <Link style={{textDecoration: "none"}} to={`/Stocks/${stock.symbol}`}>
                        
                        <div className="name">
                            <p>{stock.name} ({stock.symbol}) </p>

                            
                        </div>
                    </Link>

                )
            })}
        </div>
    </div>
    
)
}
export default Dashboard