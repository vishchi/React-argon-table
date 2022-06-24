
const initialState = {
  headers: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "HEADERS":
      return {headers: action.payload}
    default:
      return state;
  }
}

export default rootReducer;