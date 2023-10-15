import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Root from './Root';
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import preloadReducer from "./Slices/dataSlice";
import thunk from 'redux-thunk';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    preloader: preloadReducer
  },
  middleware: [...getDefaultMiddleware(), thunk],
  
})


root.render(
  <Provider store={store}>
    <BrowserRouter>

      <Root></Root>

    </BrowserRouter>
  </Provider>

);
