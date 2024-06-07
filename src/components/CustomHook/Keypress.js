import React from 'react';
import { useEffect } from 'react';

const useKeyPress = (targetKey, handler) => {
  useEffect(() => {
    const keyListener = (event) => {
      if (event.key === targetKey) {
        handler(event);
      }
    };

    window.addEventListener('keydown', keyListener);

    return () => {
      window.removeEventListener('keydown', keyListener);
    };
  }, [targetKey, handler]);
};

export default useKeyPress;