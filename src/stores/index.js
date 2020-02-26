import { combineReducers, createStore, applyMiddleware } from "redux";

import { user } from "../reducers/user";

import promise from "redux-promise-middleware";
import thunx from "redux-thunk";

const reducers = combineReducers({ user });

const store = createStore(reducers, applyMiddleware(promise));

export default store;
