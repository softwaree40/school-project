import React, { Component } from 'react'
import { connect } from "react-redux"
import {getToys} from "../action/toys"
import {getReviews} from "../action/reviews"
class   ReviewComponent extends Component {
    

    render() {
        let reviewList = []

       try {
           if(this.props.toys[this.props.match.params.id].reviews){
           reviewList = this.props.toys[this.props.match.params.id].reviews.map(review => <h3 key={review.id}>{review.content}</h3>)
           }
       }
       catch(e){

       }
         
        return (
            <>  
                {this.props.loading ? <h3>Loading in Progress.......</h3> : 
                <div>
                    <h1>{this.props.toys[this.props.match.params.id].name}</h1>
                    <h2>{this.props.toys[this.props.match.params.id].description}</h2>
                    {reviewList}
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