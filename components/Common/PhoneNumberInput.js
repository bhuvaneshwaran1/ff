import React from 'react';

const PhoneNumberInput = ({ type,error,label, value, onChange }) => {
      return (
    <div>
      <label>{label}</label>
     {/*  <span>+91</span> */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder="Enter phone number"
        maxLength="10"
      />
       {error && <span className="input_error_span">{error}</span>}
    </div>
  );
};

export default PhoneNumberInput;
