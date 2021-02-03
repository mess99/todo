import React from 'react';

import './add.scss'

const Add = () => {
    return (
        <div className="d-flex mb-4">
        <input type="text" className="form-control mr-5" />
        <button className="btn btn-success"> Ajouter </button>
      </div>
    );
};

export default Add;