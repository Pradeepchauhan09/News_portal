const express = require('express');
const cors = require('cors');

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://news-portal-xpradeepchauhanxs-projects.vercel.app'], // Replace with your frontend URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Example Route
app.get('/api/endpoint', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});