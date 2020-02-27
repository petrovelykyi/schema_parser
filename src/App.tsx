import React, { useState } from 'react';

import Editor from './components/Editor/Editor';
import InputFieldsList from './components/InputFieldsList/InputFieldsList';
import { IEditObj } from './components/InputFieldsList/interfaces/input-fields.interface';

import './App.css';

function App() {
  const schema = `schema Person {
  numeric: id
  string: firstName
  string: secondName
}`;

  const [value, setValue] = useState<string>(schema);
  const [editObj, setEditObj] = useState<IEditObj>({ name: '', fields: [] });

  const startParse = (text: string) => {
    const newText = text
      .replace(/[^a-zA-Z0-9{}: ]/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/: | :/g, ':');
    return {
      name: newText
        .slice(newText.indexOf(' '), newText.indexOf('{'))
        .trim(),
      fields: newText
        .slice(newText.indexOf('{') + 1, newText.indexOf('}'))
        .trim()
        .split(' ')
        .map((el) => (
          {
            type: el.split(':')[0],
            fieldName: el.split(':')[1],
          }
        )),
    };
  };

  const onParseClick = () => {
    const tmpObj = startParse(value);
    setEditObj(tmpObj);
    console.log(tmpObj);
  };


  return (
    <div className="App">
      <InputFieldsList editObj={editObj} />
      <Editor state={{ value, setValue }} />
      <button type="button" onClick={onParseClick}>
        Parse
      </button>
    </div>
  );
}

export default App;
