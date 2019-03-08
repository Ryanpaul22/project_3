const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define our user Schema
//username, email, password, userCreated

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is Required",
    validate: [
      function (input) {
        return input.length >= 3
      },
      "Username must be longer."
    ]
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password must be longer."
    ]
  },
  partners: [{
    type: Schema.Types.ObjectId,
    ref: "Partner"
  }],
  assingers: [{
    type: Schema.Types.ObjectId,
    ref: "Assinger"
  }],
  games: [{
    type: Schema.Types.ObjectId,
    ref: "Game"
  }],
  userCreated: {
    type: Date,
    default: Date.now
  }

});

var User = mongoose.model("User", UserSchema);

module.exports = User;