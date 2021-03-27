const express = require('express');
const reportQRouter = express.Router();
const Questions = require('../Models/Questions.js');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)

reportQRouter.put('/qa/question/:questionId/report', async (req, res) => {
  let questionId = parseInt(req.params.questionId);

  let query = { id: questionId };

  try {
    await Questions.findOneAndUpdate(query, { '$inc' : { 'reports': 1 }});
    res.send('Thanks for your feedback!')
  }
  catch(err) {
    console.log(err)
  }
});

module.exports = reportQRouter;