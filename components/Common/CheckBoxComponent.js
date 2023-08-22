
const CheckBoxComponent = ({ label, checked, onChange,error }) => {
    return (
        <div className="input_icon">
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          {label}
        </label>
        {error && <span className="input_error_span">{error}</span>}
        </div>
      );  
}

export default CheckBoxComponent;
   
   
   
   
   
   
   
   
   
   