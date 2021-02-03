import './App.scss';
import Add from './components/Add';
import Filter from './components/Filter';
import Todos from './components/Todos';

function App() {
  return (
    <div className="container p-5">
    <h4>Ajouter une todo</h4>
    <hr className="my-4" />
    <Add />
    <hr className="my-4" />
    <div className="card">
      <div className="card-header d-flex flex-row align-items-center">
        <span className="flex-fill">Todo list</span>
        <Filter />
      </div>
      <div className="card-body">
        <Todos />
      </div>
    </div>
  </div>
  );
}

export default App;
