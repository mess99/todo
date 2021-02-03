import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from "./actions"

const initialState = {
    todos: [],
    filter: ''
}

export const todoReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case ADD_TODO : 
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
        case DELETE_TODO : 
        return {
            ...state,
            todos: state.todos.filter((todo, index) => index !== action.index)
        }
        case TOGGLE_TODO : 
        return {
            ...state,
            todos: state.todos.map((todo, index) => {
                if(index === action.index) {
                    todo.done = !todo.done
                }
                return todo
            })
        }
        case SET_FILTER : 
        return {
            ...state,
            filter: action.filter
        }
        default:
            return {
                ...state
            }
    }
}