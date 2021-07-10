import React from 'react';

export const Button = props => {
  const handler = props.handler;
  return (
    <span className="button is-primary" onClick={handler}>
      {props.children}
    </span>
  );
};
