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
  servingsFruit: {
    type: Number,
    required: true
  },
  servingsVegetables: {
    type: Number,
    required: true
  },
  servingsDairy: {
    type: Number,
    required: true
  },
  glassesWater: {
    type: Number,
    required: true
  },
  gramsProtein: {
    type: Number,
    required: true
  },
  hoursWorkedOut: {
    type: Number,
    required: true
  },
  weightLiftedInPounds: {
    type: Number,
    required: true
  },
  // cramps: {
  //   type: Boolean,
  //   required: true
  // },
  // fatigue: {
  //   type: Boolean,
  //   required: true
  // },
  date: {
    type: Date,
    // default: Date.now
    required: true
  },
  userID: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('DailyCheckIn', dailyCheckInSchema);
