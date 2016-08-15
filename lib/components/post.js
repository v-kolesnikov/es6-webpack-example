import React, { Component, PropTypes } from 'react';

class Post extends Component {
  render() {
    const { author, text } = this.props;

    return (
      <div>
        <p className="article_author">{author}</p>
        <p className="article_text">{text}</p>
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
