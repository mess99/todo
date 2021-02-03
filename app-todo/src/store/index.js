import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import du reducer combine
import {todoReducer} from './reducers';

// on met en place le store
const store = createStore(todoReducer, composeWithDevTools);


// on rend dispo le store
export default store;
