import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// El punto de entrada principal simplemente renderiza el componente App modularizado.
// Esto permite que todos los componentes en ./components se utilicen correctamente.
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
