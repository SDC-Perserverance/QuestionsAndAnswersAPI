const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  questionId: {
    type: Number,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  dateWritten: {
    type: String,
    required: true
  },
  answererName: {
    type: String,
    required: true
  },
  answererEmail: {
    type: String,
    required: true
  },
  reports: {
    type: Number,
    required: true
  },
  helpful: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
}, { collection: 'Answers' });

module.exports = mongoose.model('Answers', answersSchema);