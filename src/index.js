import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambiar a 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear la raíz
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
