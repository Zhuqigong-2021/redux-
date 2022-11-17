import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import userReducer from './ducks/userSlice';
import counterReducer from './ducks/counter';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;

// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import counterReducer from './ducks/counter';
// import userReducer from './ducks/user';
// import { watcherSaga } from './sagas/rootSaga';

// const reducer = combineReducers({
//   counter: counterReducer,
//   user: userReducer,
// });

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];

// const store = createStore(reducer, {}, applyMiddleware(...middleware));

// sagaMiddleware.run(watcherSaga);

// export default store;
