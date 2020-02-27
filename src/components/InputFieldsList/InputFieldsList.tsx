import React, { FC } from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField/InputField';
import { IEditObj, IField } from './interfaces/input-fields.interface';

import './InputFieldsList.scss';

const InputFieldsList: FC<{editObj: IEditObj}> = ({ editObj }) => {
  const inputFieldsList = () => {
    if (editObj.fields) {
      return editObj.fields.map((field: IField, index) => (
        <InputField key={index.toString()} field={field} />
      ));
    }
    return null;
  };

  const onClassCreateClick = () => {
    // TODO create class
    console.log('TODO create class');
  };

  return (
    <div className="input-fields-list">
      <h3>{editObj.name}</h3>
      {inputFieldsList()}
      <button
        type="button"
        style={{ marginTop: '8px' }}
        onClick={onClassCreateClick}
      >
        Create class
      </button>
    </div>
  );
};

InputFieldsList.propTypes = {
  editObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
  }).isRequired,
};

export default InputFieldsList;
