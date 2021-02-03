import React from 'react';

const Todo = ({ name, deleteTodo, toggleTodo, done}) => {
    return (
        <li onClick={toggleTodo} className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action" >
        <span> { name } </span>
        <span>
          <input className="mx-3"  type="checkbox" checked={done} onChange={()=>{}} />
          <button onClick={(e)=>{
            e.preventDefault()
            deleteTodo()
          }} className="btn btn-sm btn-danger">delete</button>
        </span>
      </li>
    );
};

export default Todo;