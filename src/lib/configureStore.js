
// import { compose, createStore, applyMiddleware } from 'redux';
// //import { autoRehydrate } from 'redux-persist';
// import rootReducer from '../reducers'
// //import initialState from '../reducers';
// import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';

// import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // or whatever storage you are using
// export default function configureStore()
// {
//   const config = { key: 'primary', storage}
//   let reducer = persistCombineReducers(config, rootReducer)
//   const store = createStore(
//     reducer,
//     {},
//   compose(
//     applyMiddleware(
//       thunkMiddleware,
//       logger
//     ),
//   ));
//   return store;
// }


import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import thunk from 'redux-thunk'
import appReducer from '../reducers/'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();


function configureStore() {
  let store = compose(applyMiddleware(thunk,loggerMiddleware))(createStore)(appReducer)

  let persistor = persistStore(store)

  /* Uncomment to purge store
  ======================== */
  //persistor.purge()

  return {
    persistor,
    store
  }
}

export default configureStore

