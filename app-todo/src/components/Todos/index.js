import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { filters } from '../../store/actions';

const Todos = ({ todos }) => {
    return (
        <ul className="list-group">
        {
          todos.map(todo => (
            <Todo key={todo.name} {...todo} />
          ))
        }
      </ul>
    );
};

export default connect(state => {
  const filter = state.filter;
  let todos;
  switch(filter) {
    case filters.SHOW_DONE: {
      todos = state.todos.filter( t => t.done )
      break;
    }
    case filters.SHOW_ACTIVE: {
      todos = state.todos.filter( t => !t.done )
      break;
    }
    default: {
      todos = state.todos
      break;
    }
  }
  return {todos};
})(Todos);