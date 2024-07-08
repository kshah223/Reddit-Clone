import React, { useState } from 'react';
import axios from 'axios';

const CreateSubreddit = ({ onSubredditCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/subreddits/create', { name, description })
      .then(response => {
        alert('Subreddit created successfully!');
        onSubredditCreated();
      })
      .catch(error => {
        console.error('Error creating subreddit:', error);
        alert('Error creating subreddit.');
      });
  };

  return (
    <div className="create-subreddit">
      <h2>Create Subreddit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Create Subreddit</button>
      </form>
    </div>
  );
};

export default CreateSubreddit;
