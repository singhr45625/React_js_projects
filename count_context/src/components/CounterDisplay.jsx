// src/components/CounterDisplay.js
import React from 'react';
import { useCounter } from '../contexts/CounterContext';

const CounterDisplay = () => {
  const { count } = useCounter();

  return (
    <div style={styles.counterDisplay}>
      Count: {count}
    </div>
  );
};

const styles = {
  counterDisplay: {
    fontSize: '24px',
    marginBottom: '30px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  }
};

export default CounterDisplay;