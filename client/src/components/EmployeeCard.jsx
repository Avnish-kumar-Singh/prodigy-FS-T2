import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ emp, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem', borderRadius: '8px' }}>
      <h3>{emp.name}</h3>
      <p><strong>Position:</strong> {emp.position}</p>
      <p><strong>Email:</strong> {emp.email}</p>
      <div>
        <Link to={`/view/${emp._id}`}>🔍 View</Link>{' '}
        <Link to={`/edit/${emp._id}`}>✏️ Edit</Link>{' '}
        <button onClick={() => onDelete(emp._id)}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
