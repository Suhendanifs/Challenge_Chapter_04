import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';

import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const config = {
  key: 'persiste',
  storage: AsyncStorage,
  whiteList: ['login', 'home'],
};

const allMiddlewares = applyMiddleware(thunk);

const persistedReducer = persistReducer(config, allReducers);

export const store = createStore(persistedReducer, {}, allMiddlewares);

export const persistedStore = persistStore(store);
