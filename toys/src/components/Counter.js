import React, { Component } from 'react'

export default class Counter extends Component {
       state = {
        counter:0

       }
     handleOnCick = () =>{
      this.setState({
      counter: this.state.counter + 5
      })

     }
      // make a fetch request to the backend to get all of the toys and console log the toys
    //   console.log('a')
    //   fetch("http://localhost:3000/toysfdsfdsfds")
    //    .then(response => {
    //        if(response.ok) {
    //         console.log('b')
    //         return response.json()
    //        } else {
    //            throw new Error('Error')
    //        }
       
    //     })
    //    .then(toys => console.log('c', toys))
    //    .catch(err => console.log('d', err))
    //    console.log('e')

    //    // a e b c 
    //    // a d
    //  }

    render() {
        return (
            <div>
              <button onClick={this.handleOnCick}>Like {this.state.counter}</button>
            </div>
        )
    }
}
