
import React from 'react';

const RoleSelect = ({ error,label,value, onChange }) => {
  const roles = [
    { value: 'admin', label: 'Administrator' },
    { value: 'user', label: 'Regular User' },
  ];

  return (
    <div>
        <label>{label}</label>
    <select value={value} onChange={onChange}>
      {roles.map((role) => (
        <option key={role.value} value={role.value}>
          {role.label}
        </option>
      ))}
    </select>
    {error && <span className="input_error_span">{error}</span>}
    </div>
  );
};

export default RoleSelect;

