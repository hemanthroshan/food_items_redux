//import {configureStore} from '@reduxjs/toolkit';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducer/index';

const middleWare = [thunk];

const Store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)
export default Store;