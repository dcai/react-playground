import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { store } from './redux/store';

let App = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  App,
);

reportWebVitals();
