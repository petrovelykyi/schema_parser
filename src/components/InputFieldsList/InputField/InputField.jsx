import React from 'react';

import './InputField.scss';

const InputField = ({ field }) => {
  return (
    <div className="input-field">
      <label htmlFor={field.fieldName}>{field.fieldName}:</label>
      <input type={field.type === 'numeric' ? 'number' : field.type}/>
    </div>
  );
};

export default InputField;
