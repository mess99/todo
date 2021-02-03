import React from 'react';


const Filter = ( {manageClick} ) => {
    return (
    <>
      <button id="all" onClick={ manageClick} className="btn btn-primary mr-2"> Tout </button>
      <button id="done" onClick={ manageClick} className="btn btn-primary mr-2"> Fini </button>
      <button id="active" onClick={manageClick} className="btn btn-primary"> En cours </button>  
    </>
    );
};

export default Filter;