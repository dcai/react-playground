import React from 'react';
import Header from './components/Header';

export const Home = ({ name }) => (
  <div>
    <Header />
    <div>
      <h1>Hello {name}</h1>
    </div>
  </div>
);
