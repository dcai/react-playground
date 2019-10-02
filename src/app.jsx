import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Header from './components/Header';

const Message = ({ name }) => (
  <div>
    <Header />
    <div className="container">
      <h1>Hello {name}</h1>
    </div>
  </div>
);

let App = document.getElementById('app');

ReactDOM.render(<Message name="dcai" />, App);

// enable hot module replacement
if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
  });
  module.hot.accept(function() {
    // module or one of its dependencies was just updated
  });
}
