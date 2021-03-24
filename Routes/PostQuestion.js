const express = require('express');
const postQuestionRouter = express.Router();
const Question = require('../Models/Questions.js');

postQuestionRouter.post('/qa/:productId', async(req, res) => {

  let currentDate = new Date();
  let yyyy = currentDate.getFullYear();
  let mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  let dd = String(currentDate.getDate()).padStart(2, '0');
  let formattedDate = `${yyyy}-${mm}-${dd}`;

  let questionId = await Question.countDocuments();
  let productId = req.params.productId;
  let questionBody = req.body.body;
  let dateWritten = formattedDate;
  let askerName = req.body.name;
  let askerEmail = req.body.email;
  let reports = 0;
  let helpful = 0;

  const question = new Question({
    id: questionId + 1,
    productId: productId,
    body: questionBody,
    dateWritten: dateWritten,
    askerName: askerName,
    askerEmail: askerEmail,
    reports: reports,
    helpful: helpful
  });
  
  try {
    await question.save();
    res.send('Question submitted!');
  }
  catch(err) {
    console.log(err)
  }
})

module.exports = postQuestionRouter;