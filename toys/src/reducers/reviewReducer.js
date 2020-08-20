export default (state = { reviews: [], loading: false }, action) => {
     
    switch (action.type) {
          case "LOADING_REVIEWS":
                return {
                      ...state,
                      loading: true

                }
          case "REVIEWS_LOADED":
                return {
                      ...state,
                      reviews: action.payload,
                      loading: false

                }
          case "CREATE_REVIEW":
                return {
                      ...state,
                      loading: true

                }
          case "REVIEW_CREATED":
                return {
                      ...state,
                      reviews: [...state.reviews, action.payload],
                      loading: false

                }

          default:
                return state
    }


}