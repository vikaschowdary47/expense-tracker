const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
  },
  timestamp: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
