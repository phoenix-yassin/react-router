import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initState = Immutable.Map()

export default createStore(
    rootReducer,
    initState,
	applyMiddleware(reduxThunk, createLogger({stateTransformer: state=> state.toJS()}))
)
