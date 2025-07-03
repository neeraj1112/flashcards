const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
  student_id: String,
  question: String,
  answer: String,
  subject: String,
}, { timestamps: true });

module.exports = mongoose.model('Flashcard', flashcardSchema);
