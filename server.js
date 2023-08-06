const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Serve the static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Send the "index.html" file for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server running on port ', port);
});
