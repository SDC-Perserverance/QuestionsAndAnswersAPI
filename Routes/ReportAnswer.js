const express = require('express');
const reportARouter = express.Router();
const Answers = require('../Models/Answers');
const mongoose = require('mongoose');

reportARouter.put('/qa/answer/:answerId/report', async (req, res) => {
  let answerId = req.params.answerId;
  let query = { id: answerId };
  try {
    await Answers.findOneAndUpdate(query, { '$inc' : { 'reports': 1 }});
    res.send('Thanks for your feedback!');
  }
  catch(err) {
    console.log(err);
  }
});

module.exports = reportARouter;