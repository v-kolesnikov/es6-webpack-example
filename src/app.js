import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/welcome.js';
import factorial from './factorial.js';

require('./style.css');

ReactDOM.render(
  <Welcome name = {factorial(4)}/>,
  document.querySelector('.root')
);
