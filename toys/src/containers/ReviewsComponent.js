import React, { Component } from 'react'
import { connect } from "react-redux"
import {getToys} from "../action/toys"
import {getReviews} from "../action/reviews"
import  {Review} from "../components/Review"

// index  review 
//show review/1
class ReviewComponent extends Component {

    render() {
        let reviewList = []

       try {
           if(this.props.toys[this.props.match.params.id].reviews){
           reviewList = this.props.toys[this.props.match.params.id].reviews.map(review => <Review key={review.id} review={review.content} toy={this.props.toys[this.props.match.params.id]}/>)
           }
       }
       catch(e){

       }
         
        return (
            <>  
            {this.props.loading ? <h3>Loading in Progress.......</h3> : 
            <div>
                <fieldset>
                  <legend>Toy Name: </legend>
                    <br/>
                    {this.props.toys[this.props.match.params.id].name}
                  <legend>Description: </legend>
                    {this.props.toys[this.props.match.params.id].description}
                  <legend>Reviews: </legend>
                  {reviewList}
                </fieldset>
             </div>}
            </>

        )
    }
}
//this.props.match.params.id

 const mapStateToProps = state => {
      
    return {
        
        toys: state.toyReducer.toys,
        loading: state.toyReducer.loading,
        reviews: state.reviewReducer.reviews

    }
}

export default connect(mapStateToProps, { getToys,getReviews})(ReviewComponent)