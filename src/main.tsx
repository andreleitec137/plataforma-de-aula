import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  /** O create root().render serve para renderizar(mostrar) meu arquivo na tela */
    /** <App /> é a função do TSX que está o meu HTML */
    /** O ID root está no meu index.html */

  <React.StrictMode>
      <App />  
  </React.StrictMode>
)
