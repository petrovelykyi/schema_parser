import React from 'react';

import InputField from "./InputField/InputField";

import './InputFieldsList.scss';

const InputFieldsList = ({ editObj }) => {

  const inputFieldsList = () => {
    if (editObj.fields) {
      return editObj.fields.map((el, ind) => (
        <InputField key={ind} field={el}/>
      ));
    }
    return null;
  };

  const onClassCreateClick = () => {
    // TODO create class
    console.log('TODO create class')
  };

  return (
    <div className="input-fields-list">
      <h3>{editObj.name}</h3>
      {inputFieldsList()}
      <button
        style={{marginTop: '8px'}}
        onClick={onClassCreateClick}
      >
        Create class
      </button>
    </div>
  );
};

export default InputFieldsList;
