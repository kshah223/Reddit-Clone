import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Subreddit = ({ subredditId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/subreddits/${subredditId}/posts`)
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, [subredditId]);

  return (
    <div className="subreddit">
      {posts.map(post => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Subreddit;
