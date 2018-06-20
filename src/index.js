import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import StoreFactory from './store';

const store = StoreFactory();

/**
 * Render virual DOM
 * Wrap App with Provider to provide easy access to the store to children components
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
