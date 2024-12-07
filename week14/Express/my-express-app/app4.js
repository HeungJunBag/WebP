const express = require('express');

const app = express();

// Route for root path
app.get('/', (req, res, next) => {
  res.status(200).send('<h1>Welcome --- from Root</h1>');
});

// Route for /login path
app.get('/login', (req, res, next) => {
  res.status(200).send('<h1>Welcome --- from Login</h1>');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});