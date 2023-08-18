import Select from 'react-select';

const SelectComponent = ({ options, value, onChange, placeholder }) => {
    return (
        <div         
        className="input_icon">
        <div >
            <Select className='select_values'
                options={options}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
        </div>
        </div>
    )
}
export default SelectComponent