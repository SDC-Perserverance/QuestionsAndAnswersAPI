// Modules
const express = require('express');
const bodyParser = require('body-parser');
// Server config
const QnA =  express();
const PORT = 3015;
// Middleware
QnA.use(bodyParser.json());
// Route Handling
QnA.get('/', (req, res) => {
  res.send('Welcome to QnA express server');
});
// Listening to server
QnA.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

