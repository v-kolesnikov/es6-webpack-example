import React from 'react';

import News from './news.js';

const news = [
  {
    id: 1,
    author: 'Author 01',
    text: 'Text 01',
  },
  {
    id: 2,
    author: 'Author 02',
    text: 'Text 02',
  },
  {
    id: 3,
    author: 'Author 03',
    text: 'Text 03',
  },
];

class Welcome extends React.Component {
  render() {
    return (
      <div>
        Welcome, {this.props.name}!
        <News data = {news}/>
      </div>
    );
  }
}

export default Welcome;
