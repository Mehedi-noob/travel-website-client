import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {authReducer} from './Auth/authReducer';
import {busReducer} from './Bus/busReducer'

const rootReducer = combineReducers({auth:authReducer,bus:busReducer});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);
