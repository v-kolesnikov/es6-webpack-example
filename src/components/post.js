import React from 'react';

class Post extends React.Component {
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
  data: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  }),
};

export default Post;
