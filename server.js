// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
// Helpers
const getQRouter = require('./queries/GetQuestions.js');
const getARouter = require('./queries/GetAnswers.js');
// Server config
const QnA =  express();
const PORT = 3015;
const url = 'mongodb://localhost/SDCdb';

QnA.use(bodyParser.json());
QnA.use('/', getQRouter);
QnA.use('/', getARouter);

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('open', () => {
  console.log('Connection established...')
});






QnA.get('/', (req, res) => {
  res.send('Welcome to QnA express server');
});
// Listening to server
QnA.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});











// httperf artillery jmeter for stress testing for local host testing

// loaderio floodio for cloud testing