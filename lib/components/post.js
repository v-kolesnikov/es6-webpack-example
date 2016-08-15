import React, { Component, PropTypes } from 'react';

class Post extends Component {
  render() {
    const article = this.props.data;

    return (
      <div>
        <p className="article_author">{article.author}</p>
        <p className="article_text">{article.text}</p>
      </div>
    );
  }
}

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Post;
