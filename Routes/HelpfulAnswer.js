const express = require('express');
const helpfulARouter = express.Router();
const Answers = require('../Models/Answers');
const mongoose = require('mongoose');

helpfulARouter.put('/qa/answer/:answerId/helpful', async (req, res) => {
  let answerId = req.params.answerId;
  let query = { id: answerId };
  try {
    await Answers.findOneAndUpdate(query, { '$inc' : { 'helpful': 1 }});
    res.send('Thanks for your feedback!');
  }
  catch(err) {
    console.log(err);
  }
});

module.exports = helpfulARouter;