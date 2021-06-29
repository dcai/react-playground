import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min';
import { Home } from './Home';

let App = document.getElementById('app');

ReactDOM.render(<Home />, App);

// enable hot module replacement
if (module.hot) {
  module.hot.dispose(function () {
    // module is about to be replaced
  });
  module.hot.accept(function () {
    // module or one of its dependencies was just updated
  });
}
