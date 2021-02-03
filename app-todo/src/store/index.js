import { combineReducers, createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import du reducer combine
import * as redurcers from './reducers'

const todoAppReducer = combineReducers(redurcers)

// on met en place le store
const store = createStore(todoAppReducer);


// on rend dispo le store
export default store;
