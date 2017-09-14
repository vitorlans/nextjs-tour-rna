import { createStore, applyMiddleware, compose } from 'redux';

import thunk from "redux-thunk";
import logger from "redux-logger";

// import the root reducer
import allReducers from '../reducers/index';

export default function configureStore(initialState) {

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' ?   
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__        
        : compose : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunk, logger)
    );


    const store = createStore(
        allReducers,
        initialState,
        enhancer
    );

    if (module.hot) {
        module.hot.accept(() => {
          const nextRootReducer = require('../reducers/index').default;
          store.replaceReducer(nextRootReducer);
        });
      }

    return store;
}