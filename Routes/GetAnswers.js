const express = require('express');
const answerRouter = express.Router();
const Answers = require('../Models/Answers.js')

answerRouter.get('/qa/:questionId/answers', async(req, res) => {
  let questionId = req.params.questionId;

  try {
    const answers = await Answers.find({ questionId: questionId });
    res.send(answers);
  }
  catch (err) {
      console.log(err)
  }
});

module.exports = answerRouter;