
const CheckBoxComponent = ({ label, checked, onChange }) => {
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
        </div>
      );  
}

export default CheckBoxComponent;
   
   
   
   
   
   
   
   
   
   