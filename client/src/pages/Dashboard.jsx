import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeCard from '../components/EmployeeCard';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const fetchEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/employees', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(res.data);
    } catch (err) {
      alert('Unauthorized or error fetching employees');
      navigate('/');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`http://localhost:5000/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEmployees();
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #89f7fe, #66a6ff)', padding: '2rem' }}>
      {/* 🔰 Project Heading */}
      <h1 style={{ textAlign: 'center', color: '#2c3e50', fontSize: '2.5rem', marginBottom: '2rem' }}>
        🏢 Employee Management System
      </h1>

      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: '#2c3e50' }}>🧑‍💼 Employee Dashboard</h2>
          <Link
            to="/add"
            style={{
              background: '#3498db',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            ➕ Add Employee
          </Link>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2rem' }}>
          {employees.length === 0 ? (
            <p>No employees found.</p>
          ) : (
            employees.map((emp) => (
              <EmployeeCard key={emp._id} emp={emp} onDelete={handleDelete} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
