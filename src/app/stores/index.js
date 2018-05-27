import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import * as actions from './actions';
import * as sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, optionalMiddlewares = []) => ({
  ...createStore(
    rootReducer,
    initialState,
    applyMiddleware(...optionalMiddlewares, sagaMiddleware)
  ),
  runSaga: sagaMiddleware.run
});

export {
  rootReducer,
  actions,
  sagas,
  configureStore
};