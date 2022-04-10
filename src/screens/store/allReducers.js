import LoginReducer from '../Login/redux/reducer';
import HomeReducer from '../Home/redux/reducer';
import RegisterReducer from '../Register/redux/reducer';
import {combineReducers} from 'redux';
import {reduceLoad} from './reduceLoad';

export const allReducers = combineReducers({
  login: LoginReducer,
  Register: RegisterReducer,
  Home: HomeReducer,
  Load: reduceLoad,
});
