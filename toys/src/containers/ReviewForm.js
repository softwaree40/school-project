import React, { Component } from 'react'
import { connect } from "react-redux"
import { createReview } from "../action/reviews"
import { getToys } from "../action/toys"
class ReviewsForm extends Component {
    
    

    state = {
        id: "",
        content: "",
        toy_id:""
        
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })

    }

    handleSubmit = (event) => {
         
        event.preventDefault()
        const review = {
 
            content: this.state.content,
            toy_id: this.refs.select.value
        }
        
        this.props.createReview(review)

        this.setState({
            id: "",
            content: "",
            toy_id:""
        })

    }


    render() {
        // I need to make this FormComponent to pass props to stateless component
        return (
            <>
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                    <legend>Content </legend>
                    Select Toy<select name='toy_id' defaultValue={this.state.toy_id} onChange={this.handleChange} ref="select">
                    <option disabled selected value> -- select an option -- </option>
                    {this.props.toys.map((toy) => <option key={toy.id} value={toy.id}>{toy.name}</option>)}
                    </select><br />
                    <input placeholder="toyContent" type="text" name="content" value={this.state.content} onChange={this.handleChange} /><br />
                    <input type="hidden" id={this.state.id} />
                    <input type="submit" />
                    </form>

                </fieldset>
            </>
        )
    }
}
const mapStateToProps = state => {
  
    return {

        toys: state.toyReducer.toys,
        loading: state.toyReducer.loading
    }

}
export default connect(mapStateToProps, { createReview, getToys })(ReviewsForm)