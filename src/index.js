import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/Home/App';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
