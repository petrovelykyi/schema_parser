import React, { FC } from 'react';
import PropTypes from 'prop-types';


const Editor: FC<{state: {value: string, setValue: Function }}> = ({ state }) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

Editor.propTypes = {
  state: PropTypes.shape({
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
  }).isRequired,
};

export default Editor;
