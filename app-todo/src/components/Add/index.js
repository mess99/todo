import React, { useState } from 'react';

import './add.scss'

const Add = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const manageChange = (value) => {
    setInputValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(inputValue)
    setInputValue('')
  }

  return (
      <div className="d-flex mb-4">
      <form onSubmit={handleSubmit} className="form">
        <input value={inputValue} onChange={(e)=> {manageChange(e.target.value)}} type="text" className="form-control mr-5" />
        <button className="btn btn-success"> Ajouter </button>
      </form>
    </div>
  );
};

export default Add;