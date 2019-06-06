import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers'

const midd=applyMiddleware(thunk,logger);
// const midd=applyMiddleware(thunk);

export default createStore(reducers,midd);