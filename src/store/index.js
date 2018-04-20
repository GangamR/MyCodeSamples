import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from '../reducer';
import { createLogger } from 'redux-logger'


const logger = createLogger({
    // ...options
  });


const composeEnhancers =
    typeof window === 'object' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose);

export default function configureStore() {
    const middlewares = [logger];
    const store = createStore(
        createReducer(),
        {},
        composeEnhancers(applyMiddleware(...middlewares))
    );
    return store;
}