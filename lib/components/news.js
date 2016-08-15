import React, { Component, PropTypes } from 'react';

import Post from './post.js';

class News extends Component {
  render() {
    const posts = this.props.data.map((item) => (
      <Post key = {item.id} {...item} />
    ));

    const noNews = <p>No news...</p>;

    const template = posts.length > 0 ? posts : noNews;

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
