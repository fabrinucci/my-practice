import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { App } from './components/App';

ReactDOM.render(
  <App message='Mensaje papa' />,
  document.getElementById('app')
)