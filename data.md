import React from 'react';
 
import { Link } from 'react-router-dom'


import '../App.css';
 


const NavBar = () => {

 
    return (

 
        <div className="nav">
         
       

      
            <Link to='/' className='item'>
                Home
            </Link>

            <Link to='/ViewAllToys' className='item'>
                View All Toys
            </Link>

            <Link to='/ViewReview' className='item'>
                 View Review 
            </Link> 
 

            <Link to='/about' className='item'>
                About Us
            </Link>

   
             

        
        </div>
    )
}
 

 <h1>MY INDEX PAGE FOR ALL COMPONENT</h1>
      <Navigation />
      < Home />
      < About />
      < ViewReview />
      < ViewAllToys />
      < ToyComponent />
      < ReviewComponent />
      ========================================
      import React, { Component } from 'react'
import { connect } from "react-redux"
// import { addReview } from "../action/reviews"
import { Review } from "../components/Review"
// import {Toy} from "../components/Toy"
class ReviewsComponent extends Component {
  
    render() {
        
       
        // map through the list of reviews and return each review nested on toys
        // const reviews = this.props.toys.reviews.map((review, i) => {
           
        //     return <Review key={i} review={review} />

        // })
        // const reviews = this.props.toys.find(toy => toy.id == this.props.match.params.id).reviews
        return (
            <>
               <Review key={reviews}/> 
                {this.props.loading ? <h3>Loading in Progress.......</h3> : reviews}
            </>

        )
    }
}
const mapDispatchToProps = (dispatch) =>{
     return 

}

const mapStateToProps = state => {
    return {
        toys: [...state.toyReducer.toys]
        


    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsComponent)