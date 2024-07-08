import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, [userId]);

  const fetchUserProfile = () => {
    axios.get(`http://localhost:5000/api/users/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user profile:', error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user.username}'s Profile</h2>
      <h3>Subscribed Subreddits</h3>
      <ul>
        {user.subscriptions.map(subreddit => (
          <li key={subreddit._id}>{subreddit.name}</li>
        ))}
      </ul>
      <h3>Upvoted Posts</h3>
      <ul>
        {user.upvotes.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
