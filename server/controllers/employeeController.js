const Employee = require('../models/Employee');

exports.getAll = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.getOne = async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

exports.create = async (req, res) => {
  const newEmp = new Employee(req.body);
  await newEmp.save();
  res.status(201).json(newEmp);
};

exports.update = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted successfully' });
};
