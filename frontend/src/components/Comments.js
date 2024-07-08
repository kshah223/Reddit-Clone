import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = () => {
    axios.get(`http://localhost:5000/api/comments/${postId}`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments:', error));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const userId = 'your_valid_user_id'; // Replace with a valid user ID
    axios.post('http://localhost:5000/api/comments', { userId, postId, content: newComment })
      .then(response => {
        setNewComment('');
        fetchComments();
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div className="comments">
      <h4>Comments</h4>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Comments;