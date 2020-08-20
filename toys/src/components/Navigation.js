import React from "react"
import { NavLink } from "react-router-dom"

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "gold",
    
    
}

const Navigation = () => (
    <div>
        <NavLink to="/" exact style={link} activeStyle={{ background: "darkblue" }}>
        Home</NavLink>

        <NavLink to="/toys" exact style={link} activeStyle={{ background: "purple" }}>
        All toys</NavLink>

        <NavLink to="/toyfrom" exact style={link} activeStyle={{ background: "black" }}>
        Create toys</NavLink>

         
        <NavLink to="/reviews/new" exact style={link} activeStyle={{ background: "#00ff40" }}>
        Create Review</NavLink>
         

         

        <NavLink to="/about" exact style={link} activeStyle={{ background: "hash" }}>
        About</NavLink>
    </div>
)

export default Navigation