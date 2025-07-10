// src/App.js
import React from 'react';
import { CounterProvider } from './contexts/CounterContext';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

const App = () => {
  return (
    <CounterProvider>
      <div style={styles.container}>
        <h1 style={styles.title}>Counter App with Context API</h1>
        <CounterDisplay />
        <CounterButtons />
      </div>
    </CounterProvider>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  }
};

export default App;