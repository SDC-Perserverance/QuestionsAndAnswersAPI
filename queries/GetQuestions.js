const express = require('express');
const questionRouter = express.Router();
const Questions = require('../models/Questions.js')

questionRouter.get('/qa/:productId', async(req, res) => {
  let productId = req.params.productId;

  try {
    const questions = await Questions.find({ productId: productId });
    res.send(questions);
  }
  catch (err) {
      console.log(err)
  }
});

module.exports = questionRouter;
