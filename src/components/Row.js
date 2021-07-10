import React from 'react';

export const Row = props => {
  const colsclass = `is-${props.cols || 8}`;
  return (
    <div className={`columns is-variable ${colsclass}`}>{props.children}</div>
  );
};
