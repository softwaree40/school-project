export const getToys = () => {
    
    return (dispatch) => {
        dispatch({ type: "LOADING_TOYS" })
        return fetch("http://localhost:3000/toys")
            .then(response => response.json())
            .then(toys => dispatch({ type: "TOYS_LOADED", payload: toys }))
            
            
    }

}

export const deleteToy = (id) => {
    return (dispatch) => {
        dispatch({type: 'DELETING_TOY'})
        fetch(`http://localhost:3000/toys/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => dispatch({type: 'TOY_DELETED', payload: id}))
    }
}

export const createToy = (toy) => {

    return (dispatch) => {

        dispatch({ type: "ADDING_TOY" })
        fetch("http://localhost:3000/toys", {

            method: "POST", body: JSON.stringify(toy),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json())
            .then(toy =>dispatch({type: "TOY_ADDED",payload: toy}))
    }

}