import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Embedded CSS for h2, input, button */}
      <style>{`
        .login-form {
          background: white;
          padding: 2rem 2.5rem;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          width: 300px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .login-form h2 {
          text-align: center;
          margin-bottom: 1rem;
          color: #333;
        }

        .login-form input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
        }

        .login-form button {
          background-color: #2980b9;
          color: white;
          padding: 10px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .login-form button:hover {
          background-color: #1c5980;
        }
      `}</style>

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(120deg, #2980b9, #6dd5fa)',
  }
};

export default Login;
