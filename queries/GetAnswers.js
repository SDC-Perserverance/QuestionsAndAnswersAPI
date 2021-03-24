const express = require('express');
const answerRouter = express.Router();
const Answers = require('../models/Answers.js')

answerRouter.get('/qa/:questionId/answers', async(req, res) => {
  let questionId = req.params.questionId;
  try {
    // BUG: Answers collection currently displays productID as property name isntead of questionID <-- will go back and reload db
    const answers = await Answers.find({ productId: questionId });
    res.send(answers);
  }
  catch (err) {
      console.log(err)
  }
});

module.exports = answerRouter;