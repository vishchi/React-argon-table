
const initialState = {
  headers: [],
  data: {
    project: '',
    budget: '',
    status: '',
    users: [],
    completion: ''
  }
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "HEADERS":
      return {headers: action.payload}
    case "DATA":
      return {data: {project: action.payload.Project,
        budget: action.payload.Budget,
        status: action.payload.Status,
        users: action.payload.Users,
        completion: action.payload.Completion}}
    default:
      return state;
  }
}

export default rootReducer;