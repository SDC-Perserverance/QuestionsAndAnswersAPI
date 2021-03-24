const express = require('express');
const postAnswerRouter = express.Router();
const Answers = require('../Models/Answers.js')

postAnswerRouter.post('/qa/:questionId/answers', async(req, res) => {
  let currentDate = new Date();
  let yyyy = currentDate.getFullYear();
  let mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  let dd = String(currentDate.getDate()).padStart(2, '0');
  let formattedDate = `${yyyy}-${mm}-${dd}`;

  let id = await Answers.countDocuments();
  let questionId = req.params.questionId;
  let body = req.body.body;
  let dateWritten = formattedDate;
  let answererName = req.body.name;
  let answererEmail = req.body.email;
  let reports = 0;
  let helpful = 0;
  let images = req.body.photos;

  const answer = new Answers({
    id: id,
    // BUG IS FOUND HERE AGAIN REMEMBER TO CHANGE TO QUESTION ID ONCE FIXED
    productId: questionId,
    body: body,
    dateWritten: dateWritten,
    answererName: answererName,
    answererEmail: answererEmail,
    reports: reports,
    helpful: helpful,
    images: images
  });
 
  try {
    await answer.save();
    res.send('Answer submitted');
  }
  catch(err) {
    console.log(err)
  }
})

module.exports = postAnswerRouter;