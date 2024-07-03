// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the path /comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
