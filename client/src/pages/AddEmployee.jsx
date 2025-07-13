import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    position: '',
    phone: '',
    location: '',   // ✅ Use 'location' instead of 'address'
    salary: '',
  });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/employees', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard');
    } catch (err) {
      console.error("Add Employee Error:", err.response?.data || err.message);
      alert(`Error: ${err.response?.data?.message || "creating employee"}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '500px',
        margin: '3rem auto',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        background: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Add Employee</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          type={
            key === 'email' ? 'email' :
            key === 'phone' || key === 'salary' ? 'number' :
            'text'
          }
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          required
          style={{
            padding: '10px',
            marginBottom: '1rem',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            background: '#eaf1ff',
          }}
        />
      ))}

      <button
        type="submit"
        style={{
          padding: '10px 20px',
          width: '100%',
          background: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Create
      </button>
    </form>
  );
};

export default AddEmployee;
