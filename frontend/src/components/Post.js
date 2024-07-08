import React from 'react';
import axios from 'axios';
import Comments from './Comments';
import './Post.css';

const Post = ({ post }) => {
  const handleUpvote = () => {
    axios.post(`http://localhost:5000/api/posts/${post._id}/upvote`)
      .then(response => {
        post.upvotes = response.data.upvotes;
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={handleUpvote}>Upvote ({post.upvotes})</button>
      <Comments postId={post._id} />
    </div>
  );
};

export default Post;
