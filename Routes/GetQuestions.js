const express = require('express');
const questionRouter = express.Router();
const Questions = require('../Models/Questions.js');
const fs = require('fs');

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
