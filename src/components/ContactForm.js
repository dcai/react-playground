import React from 'react';
import { FormField } from './FormField';

export const Submit = props => (
  <div className="control">
    <button type="submit" className="button">
      {props.label}
    </button>
  </div>
);

export const ContactForm = props => (
  <>
    <FormField label="Name" />
    <FormField label="Email" />
    <FormField label="Message" textarea={true} />
    <Submit label="Send Message" />
  </>
);
