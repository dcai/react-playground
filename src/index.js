import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
