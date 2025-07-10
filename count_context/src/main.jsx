// src/main.jsx or src/index.js
import { createRoot } from 'react-dom/client';
import App from './App';

// 1. Create a root
const container = document.getElementById('root');
const root = createRoot(container);

// 2. Render your app
root.render(<App />);