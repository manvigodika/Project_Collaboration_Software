const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
  },
  users: {
    type: Array,
    default: [],
  },
  tasks: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Project", projectSchema);
