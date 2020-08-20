import { combineReducers } from "redux"
import toyReducer from "./toyReducer"
import reviewReducer from "./reviewReducer"

const rootReducer = combineReducers({
     toyReducer,
     reviewReducer
})

export default rootReducer