const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  quizName: String,
  question: String,
  rightOption: String,
  wrongOption: [String],
  plusPoint: Number,
  negativePoint: Number,
});

const Question = new mongoose.model("Question", QuestionSchema);

module.exports = { Question };
