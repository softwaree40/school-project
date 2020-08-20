export default (state = { toys: [], loading: false}, action) => {
     
      switch (action.type) {
            case "LOADING_TOYS":
                  return {
                        ...state,
                        loading: true

                  }
            case "TOYS_LOADED":
                  return {
                        ...state,
                        toys: action.payload,
                        loading: false

                  }
            
                  case 'DELETING_TOY':
                        return {
                            ...state,
                            loading: true
                        }
                
                    case 'TOY_DELETED':
                        return {
                            ...state,
                            toys: [...state.toys.filter(toy => `${toy.id}` !== action.payload)],
                            loading: false 
                        }
            
            case "ADDING_TOY":
                  return {
                        ...state,
                        loading: true

                  }
            case "TOY_ADDED":
                  return {
                        ...state,
                        toys: [...state.toys, action.payload],
                        loading: false

                  }

            default:
                  return state
      }


}