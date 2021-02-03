import { ADD_TODO, DELETE_TODO, filters, SET_FILTER, TOGGLE_TODO } from "./actions"


export const todos = (state = [], action) => {
    switch (action.type) {
    case ADD_TODO :
      return [ ...state, action.todo ];
    case DELETE_TODO :
      return state.data.filter((todo, index) => index !== action.index);
    case TOGGLE_TODO :
      return state.map((todo, index) => {
        if (index === action.index) {
          todo.done = !todo.done;
        }
        return todo;
      })
    default:
      return state
  }
}

export const filter = (state = filters.SHOW_ALL, action) => {
    switch (action.type) {
    case SET_FILTER :
      return action.filter;
    default:
      return state
  }
}
