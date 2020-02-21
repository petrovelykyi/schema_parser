import React from 'react';

const Editor = ({ state }) => {
  const handleInput = (e) => {
    state.setValue(e.target.value);
  };

  return (
    <div>
      <textarea
        cols={120}
        rows={10}
        value={state.value}
        onChange={handleInput}
      />
    </div>
  );
};

export default Editor;
