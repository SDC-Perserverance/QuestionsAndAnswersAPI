// Modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
// Import route modules
const getQRouter = require('./Routes/GetQuestions.js');
const getARouter = require('./Routes/GetAnswers.js');
const postQRouter = require('./Routes/PostQuestion.js');
const postARouter = require('./Routes/PostAnswer.js');
const helpfulQRouter = require('./Routes/HelpfulQuestion.js');
const reportQRouter = require('./Routes/ReportQuestion.js');
const helpfulARouter = require('./Routes/HelpfulAnswer.js');
const reportARouter = require('./Routes/ReportAnswer.js');
// Server config
const QnA =  express();
const PORT = 3015;
const url = 'mongodb://localhost/SDC';

QnA.use(bodyParser.json());
// Allow server to use the various routes
// GET
QnA.use('/', getQRouter);
QnA.use('/', getARouter);
// POST
QnA.use('/', postQRouter);
QnA.use('/', postARouter);
// PUT
QnA.use('/', helpfulQRouter);
QnA.use('/', reportQRouter);
QnA.use('/', helpfulARouter);
QnA.use('/', reportARouter);

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