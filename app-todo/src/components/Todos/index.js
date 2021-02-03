import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { filters, toggleTodo, deleteTodo } from '../../store/actions';

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul className="list-group">
        {
          todos.map((todo, i) => (
            <Todo key={i} {...todo} deleteTodo={()=>{deleteTodo(i)}} toggleTodo={()=>{toggleTodo(i)}} />
          ))
        }
      </ul>
    );
};

// mapStateToProps et mapStateToDispatch sans creer le container ...
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
}, {
  // On peut directement faire ça, cest comme "disptach(....)"
  toggleTodo,
  deleteTodo
})(Todos);