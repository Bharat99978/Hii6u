const express = require('express');
const app = express();

// Define a route for the API
app.get('/api/message', (req, res) => {
    res.json({ message: 'Frontend and Backend are connected successfully!' });
});

// Export the app for Vercel
module.exports = app;
