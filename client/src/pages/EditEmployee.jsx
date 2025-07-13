import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`http://localhost:5000/api/employees/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm(res.data);
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/employees/${id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Employee</h2>
      {Object.keys(form).map((key) => (
        key !== '_id' && (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            required
          />
        )
      ))}
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployee;
