import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

export function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}
