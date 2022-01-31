import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootSaga} from './sagas/rootSaga';
import {rootReducer }from './reducers/rootReducer';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(),
    ),
);

sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;