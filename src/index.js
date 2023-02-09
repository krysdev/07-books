import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import BooksContext from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BooksContext.Provider value={5555}>
      <App />
    </BooksContext.Provider>
  </React.StrictMode>
);
