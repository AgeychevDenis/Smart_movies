import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import KinopoiskService from './services/kinopoisk-server';
import './index.scss';

// const kinopoiskвService = new KinopoiskService;

// kinopoiskвService.getAllCharacters().then(res => res.films.forEach(item => console.log(item)))

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);