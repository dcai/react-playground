import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions, selectCount } from '../redux';

export const Counter = props => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);

  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Counter</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p className="is-size-1 has-text-weight-bold has-text-centered">
              {counter}
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <a
            href
            className="card-footer-item"
            onClick={() => dispatch(counterActions.increment())}
          >
            +
          </a>
          <a
            href
            className="card-footer-item"
            onClick={() => dispatch(counterActions.reset())}
          >
            reset
          </a>
          <a
            href
            className="card-footer-item"
            onClick={() => dispatch(counterActions.decrement())}
          >
            -
          </a>
        </footer>
      </div>
    </>
  );
};
