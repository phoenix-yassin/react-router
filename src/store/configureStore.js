import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
  rootReducer,
  initialState,
  // Transform state before print. Eg. convert Immutable object to plain JSON.
  applyMiddleware(reduxThunk, createLogger({ stateTransformer: state => state.toJS() }))
);
