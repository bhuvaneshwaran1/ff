import React, { useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const InputwithIcon = ({ label, value, onChange, error }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="password-input">
      <label>{label}</label>
        <input type={visible ? 'text' : 'password'} value={value} onChange={onChange} />
        <span className="toggle-icon" onClick={toggleVisibility}>
          {visible ? <RiEyeOffFill /> : <RiEyeFill />}
        </span>
      
      {error && <span className="input_error_span">{error}</span>}
    </div>
  );
};

export default InputwithIcon;
