import React from 'react';
import './StartButton.scss';
import { useHistory } from 'react-router-dom';

export const StartButton = () => {
  const history = useHistory();
  const handleStart = () => {
    history.push('/products');
  };

  return (
    <button
      type="button"
      className="start_button"
      onClick={handleStart}
    >
      GO!
    </button>
  );
};
