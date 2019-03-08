const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define our Game Schema
//date, time, assinger, partner, town, site, level, position, fee, payment type, payment status, notes

var GameSchema = new Schema ({
  
  date: {
    type: String,
    trim: true,
    required: "Enter the date"
  },
  time: {
    type: String,
    trim: true,
    required: "Enter the start time"
  },
  assinger: [
    {
      type: String,
      required: "Assinger Required"
    }
  ],
  partner: [
    {
      type: String,
      required:  "Partner Required"
    }
  ],
  town: {
    type: String,
    trim: true
  },
  site: {
    type: String,
    trim: true
  },
  level: {
    type: String,
    trim: true
  },
  position: {
    type: Boolean,
    default: false
  },
  fee: {
    type: Number,
    trim: true,
    required: "Fee Required",
  },
  paymentType: {
    type: String,
    trim: true
  },
  paymentStatus: {
    type: Boolean,
    default: false,
    required: "Status Required",
  },
  notes: {
    type: String
  }
  });

  var Game = mongoose.model("Game", UserSchema);

  module.exports = Game;