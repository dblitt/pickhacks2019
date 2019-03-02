const mongoose = require('mongoose');

const dailyCheckInSchema = new mongoose.Schema({
  weightInPounds: {
    type: Number,
    required: true
  },
  heightInInches: {
    type: Number,
    required: true
  },
  hoursSleep: {
    type: Number,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  userID: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('DailyCheckIn', dailyCheckInSchema);
