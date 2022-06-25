
const initialState = {
  headers: [],
  data: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "HEADERS":
      return {...state, headers: action.payload};
    case "DATA":
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export default rootReducer;