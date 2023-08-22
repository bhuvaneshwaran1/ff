import Select from 'react-select';

const SelectComponent = ({ error,options, value, onChange, placeholder }) => {
    return (
        <div         
        className="input_icon">
        <div >
            <Select className='select_values'
                options={options}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
                 {error && <span className="input_error_span">{error}</span>}
        </div>
        </div>
    )
}
export default SelectComponent