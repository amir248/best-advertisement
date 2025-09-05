const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('localhost:3000'));

// Route to serve the index.html file
app.get('/', (req, res) => {
    // __dirname is the current directory of the executing script
    res.sendFile(path.join(__dirname, 'index.html')); 
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});