import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './lib/components/welcome.js';
import factorial from './lib/factorial.js';

require('./lib/style.css');

ReactDOM.render(
  <Welcome name = {factorial(4)}/>,
  document.querySelector('.root')
);
