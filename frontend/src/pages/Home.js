import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUser from '../components/CreateUser';
import CreateSubreddit from '../components/CreateSubreddit';
import CreatePost from '../components/CreatePost';
// import Subreddit from '../components/Subreddit';
import Post from '../components/Post'; // Import the Post component
import '../styles/Home.css';

const Home = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchSubreddits();
  }, []);

  const fetchSubreddits = () => {
    axios.get('http://localhost:5000/api/subreddits')
      .then(response => setSubreddits(response.data))
      .catch(error => console.error('Error fetching subreddits:', error));
  };

  const handleSubredditChange = (event) => {
    setSelectedSubreddit(event.target.value);
    fetchPosts(event.target.value);
  };

  const fetchPosts = (subredditId) => {
    axios.get(`http://localhost:5000/api/subreddits/${subredditId}/posts`)
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  };

  return (
    <div className="home">
      <h1>Reddit Clone</h1>
      <div className="form-section">
        <CreateUser onUserCreated={fetchSubreddits} />
        <CreateSubreddit onSubredditCreated={fetchSubreddits} />
      </div>
      <div className="subreddit-section">
        <h2>Select Subreddit</h2>
        <select onChange={handleSubredditChange} value={selectedSubreddit}>
          <option value="">Select a subreddit</option>
          {subreddits.map(sub => (
            <option key={sub._id} value={sub._id}>{sub.name}</option>
          ))}
        </select>
      </div>
      {selectedSubreddit && (
        <div className="create-post-section">
          <CreatePost subredditId={selectedSubreddit} onPostCreated={() => fetchPosts(selectedSubreddit)} />
        </div>
      )}
      <div className="posts-section">
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
