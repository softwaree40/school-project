import React from 'react'
import {Link} from "react-router-dom"

export const Toy = (props) => {
       
    return (
        <div className="new-toy-card">
               
                <fieldset>
                <img src={props.toy.url} alt={props.toy.alt} ></img><br/>
                <button><Link key={props.toy.id} to={`/toys/${props.index}`}>Toy Review</Link></button><br/>
                <button onClick={props.deleteToy} id={props.toy.id}>X</button>
                <h5>{props.toy.name}</h5>
            </fieldset>
        </div>
        
//try to make the url to be index of the toy
    )
}
