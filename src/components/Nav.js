import React from "react"
import {Link} from "react-router-dom"

const Nav = (props)=>{
return(
    <div className="nav">
        <Link  to="/" style={{color: "white", textDecoration: "none"}}>
            <div>iStocks</div>
        </Link>
        <Link style={{color: "white", textDecoration: "none"}} to="/About">
            <div>About</div>
        </Link>
        <Link  style={{color: "white", textDecoration: "none"}} to="/Dashboard">
            <div>Stocks</div>
        </Link>
    </div>
)
}
export default Nav