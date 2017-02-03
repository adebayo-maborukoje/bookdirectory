import {createStore, applyMiddleWare} from 'redux';
import rootReducer from '..reducers';
import thunk from 'redux-thunk';


export default function configureStore(initState) {
  return createStore(
    rootReducer,
    initState,
    applyMiddleWare(thunk)
  );
}