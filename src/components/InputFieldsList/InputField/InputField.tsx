import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { IField } from '../interfaces/input-fields.interface';

import './InputField.scss';

const InputField: FC<{field: IField}> = ({ field }) => (
  <div className="input-field">
    <label htmlFor={field.fieldName}>
      {field.fieldName}
      :
    </label>
    <input type={field.type === 'numeric' ? 'number' : field.type} />
  </div>
);

InputField.propTypes = {
  field: PropTypes.shape({
    type: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
  }).isRequired,
};

export default InputField;
