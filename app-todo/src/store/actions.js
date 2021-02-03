export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
})

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    index
})

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    index
})

export const setFilter = filter => {
    return {
      type: SET_FILTER,
      filter
    }
  };

