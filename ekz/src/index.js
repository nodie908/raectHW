import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore, combineReducers } from "redux";
import { cartReducer, bookReducer } from "./redux/reducers";
import App from './App';
import { fetchBooksFromApi } from './api';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  cart: cartReducer,
  book: bookReducer,
});

const store = createStore(rootReducer);

fetchBooksFromApi(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);

