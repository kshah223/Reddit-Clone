# Reddit-Clone

This is a simple Reddit clone built with a Node.js backend and a React frontend. It allows users to create subreddits, submit posts, upvote posts, and comment on posts. Users can also view their profile to see their subscriptions and upvotes.

## Features
- Subreddit (topic group) timeline where posts are ordered by the recency of their creation time
- Users can subscribe to and submit posts to subreddits
- Each post can receive upvotes and comments (one upvote per user)
- On a user profile, display all the subreddits they subscribe to and all upvotes they have received

## Getting Started
### Prerequisites
- Node.js
- MongoDB

### Installation
- Clone the repository:
```
git clone https://github.com/kshah223/Reddit-Clone.git
cd Reddit-Clone
```

- Backend Setup:
```
cd backend
npm install
npm start
```
The backend server will run on http://localhost:5000.

- Frontend Setup:
```
cd ../frontend
npm install
npm start
```
The frontend application will run on http://localhost:3000.

## API Endpoints

### Users
- Create User: POST /api/users/create
- Get User Profile: GET /api/users/:id

### Subreddits
- Create Subreddit: POST /api/subreddits/create
- Get Subreddits: GET /api/subreddits
- Get Subreddit Posts: GET /api/subreddits/:subredditId/posts

### Posts
- Create Post: POST /api/posts
- Upvote Post: POST /api/posts/:id/upvote

### Comments
- Add Comment: POST /api/comments
- Get Comments: GET /api/comments/:postId

## Project Structure
```
Reddit-Clone/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── config/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── package.json
└── README.md
```

## Built With
- Express - Backend framework
- Mongoose - MongoDB object modeling
- React - Frontend framework
- Axios - HTTP client

## Authors
- Kalpkumar Shah - Your GitHub Profile

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
