// src/components/CounterButtons.js
import React from 'react';
import { useCounter } from '../contexts/CounterContext';

const CounterButtons = () => {
  const { increment, reset } = useCounter();

  return (
    <div style={styles.buttonContainer}>
      <button 
        onClick={increment} 
        style={styles.button}
      >
        Count
      </button>
      <button 
        onClick={reset} 
        style={{...styles.button, ...styles.resetButton}}
      >
        Reset
      </button>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
};

export default CounterButtons;