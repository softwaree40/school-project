import React, { Component } from 'react'
import { connect } from "react-redux"
import { createToy } from "../action/toys"

class ToyFormComponent extends Component {
    state = {
        name: "",
        description: "",
        url: "",
        
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            
        })

    }

    handleSubmit = (event) => {
        
        event.preventDefault()
        const toy = {

            name: this.state.name,
            description: this.state.description,
            url: this.state.url,
            
        }
        this.props.createToy(toy)
       
        this.setState({
            name: "",
            description: "",
            url: "",
            
           
        })
    }


    render() {
         // I need to make this FormComponent to pass props to stateless component
        return (
           <>
              <fieldset>
                <form onSubmit={this.handleSubmit}>
                    <legend>Name </legend>
                    <input placeholder="toyName" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <legend>Description </legend>
                    <input placeholder="toyDescription" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <legend>URL </legend>
                    <input placeholder="ex...http://" type="text" name="url" value={this.state.url} onChange={this.handleChange}/><br/>
                    <button >Add Toys</button>
                </form>

            </fieldset>
           </>
        )
    }
}
export default connect(null, { createToy })(ToyFormComponent)