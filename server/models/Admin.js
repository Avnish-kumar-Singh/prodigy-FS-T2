const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // prevent duplicate usernames
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

module.exports = mongoose.model('Admin', adminSchema);
