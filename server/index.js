const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
require('./config/db')();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
