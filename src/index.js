import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootStore from "./core/store/reducer/reducer";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: rootStore});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
