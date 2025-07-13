import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/employees')
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  return (
    <div style={styles.container}>
      <style>{`
        .table-box {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          width: 90%;
          max-width: 800px;
        }
        .table-box h2 {
          text-align: center;
          margin-bottom: 1rem;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 12px 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #2980b9;
          color: white;
        }
        tr:hover {
          background-color: #f1f1f1;
        }
        .action-btn {
          background: #3498db;
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-right: 6px;
        }
        .action-btn:hover {
          background: #2c80b4;
        }
      `}</style>

      <div className="table-box">
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp._id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => navigate(`/view/${emp._id}`)}
                  >
                    🔍 View
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => navigate(`/edit/${emp._id}`)}
                  >
                    ✏️ Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
};

export default ViewEmployees;
