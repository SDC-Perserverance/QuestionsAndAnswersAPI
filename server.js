// Modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
// Server config
const QnA =  express();
const PORT = 3015;
// Middleware
QnA.use(bodyParser.json());
// Route Handling
QnA.get('/', (req, res) => {


  const stream = fs.createReadStream('./data/questions.csv').pipe();

  stream.on('data', (chunk)=>{
    console.log(chunk);
  })


  res.send('Welcome to QnA express server');
});
// Listening to server
QnA.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// httperf artillery jmeter for stress testing for local host testing

// loaderio floodio for cloud testing