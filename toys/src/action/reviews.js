export const getReviews = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_REVIEWS" })
        return fetch("http://127.0.0.1:3000/reviews")
            .then(response => response.json())
            .then(reviews => dispatch({ type: "REVIEWS_LOADED", payload: reviews }))
            .catch(err => console.log(err))
    }

}



export const createReview = (review) => {
    
    return (dispatch) => {

        dispatch({ type: "CREATE_REVIEW" })
        fetch("http://127.0.0.1:3000/reviews", {

            method: "POST", body: JSON.stringify(review),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(review =>dispatch({type: "REVIEW_CREATED",payload: review}))
    }

}