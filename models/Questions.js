const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  productId: {
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
  askerName: {
    type: String,
    required: true
  },
  askerEmail: {
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
  }
}, { collection: 'Questions' });

module.exports = mongoose.model('Questions', questionsSchema);