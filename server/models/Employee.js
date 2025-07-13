const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  position: String,
  phone: String,
  address: String,
  salary: Number,
});

module.exports = mongoose.model('Employee', employeeSchema);
