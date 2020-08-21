import React, { Component } from 'react'
import { connect } from "react-redux"
import { Toy } from "../components/Toy"
import { getToys, deleteToy } from "../action/toys"
import { getReviews } from '../action/reviews'

class ToysComponent extends Component {


    
    componentDidMount() {
        this.props.getToys()
        this.props.getReviews()
    }

    
    

    handleDelete = (event) =>{
     this.props.deleteToy(event.target.id)


    }
    render() {
        console.log(this.props.toys)
        let toys = this.props.toys.map((toy, i) => {
             
            return <Toy key={i} toy={toy} index={i} id={toy.id} deleteToy={this.handleDelete}/>

        })
         
          
      
        return (
            <>  
                {this.props.loading ? <h3>Loading in Progress.......</h3> : toys }
            </>

        )
    }
}

 const mapStateToProps = state => {
      
    return {
        toys: state.toyReducer.toys,
        loading: state.toyReducer.loading,
        error: state.toyReducer.error

    }
}

export default connect(mapStateToProps, { getToys,getReviews,deleteToy })(ToysComponent)