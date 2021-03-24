const express = require('express');
const helpfulQRouter = express.Router();
const Questions = require('../Models/Questions.js');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

helpfulQRouter.put('/qa/question/:questionId/helpful', async (req, res) => {
  // extract question id
  let questionId = parseInt(req.params.questionId);
  // find question
  let query = { id: questionId };
  try {
    await Questions.findOneAndUpdate(query, { '$inc' : { 'helpful': 1 }});
    res.send('Thanks for your feedback!')
  }
  catch(err) {
    console.log(err)
  }
});

module.exports = helpfulQRouter;