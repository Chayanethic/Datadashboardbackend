const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
   },
  chawal: {
    type: String
  }
},{
  timestamps: true,
})

module.exports = mongoose.model("Users",userSchema )