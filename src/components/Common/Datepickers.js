
const Datepickers = ({ label,selectedDate, onChange,error ,value}) => {
  return (
    <div>
      {label}
      <input type="date" value={value} onChange={onChange} />
    {error && <span className="input_error_span">{error}</span>}
    </div>
  );
};

export default Datepickers;
