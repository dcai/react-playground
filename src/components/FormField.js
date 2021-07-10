import React from 'react';

export const FormField = props => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      {props.textarea ? (
        <textarea className="textarea is-small"></textarea>
      ) : (
        <input className="input is-medium" type="text" />
      )}
    </div>
  </div>
);
