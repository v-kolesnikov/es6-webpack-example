import React, { Component, PropTypes } from 'react';

import Post from './post.js';

class News extends Component {
  render() {
    const articles = this.props.data.map((item) => (
      <Post key = {item.id} data = {item} />
    ));

    const noNews = <p>No news...</p>;

    const template = articles.length > 0 ? articles : noNews;

    return (
      <div className="news">
        {template}
      </div>
    );
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired,
};

export default News;
