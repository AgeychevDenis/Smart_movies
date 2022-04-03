import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import TheMovieService from './services/the-movie-service';
import './index.scss';

TheMovieService();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);