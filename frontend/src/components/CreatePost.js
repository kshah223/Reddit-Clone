import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ subredditId, onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = 'your_valid_user_id'; // Replace with a valid user ID
    axios.post('http://localhost:5000/api/posts', { userId, subredditId, title, content })
      .then(response => {
        alert('Post created successfully!');
        onPostCreated();
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('Error creating post:', error);
        alert('Error creating post.');
      });
  };

  return (
    <div className="create-post">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
