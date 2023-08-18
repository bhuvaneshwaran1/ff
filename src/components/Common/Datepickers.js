
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepickers = ({ selectedDate, onChange }) => {
  return (
    <div className="input_icon">
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat="MM/dd/yyyy"
    />
    </div>
  );
};

export default Datepickers;
