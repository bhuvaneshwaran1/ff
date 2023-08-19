
const InputComponent = ({ label, type, value, onChange, placeholder, icon, error }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
            {error && <span className="input_error_span">{error}</span>}

            {/*  <span className="icon_user">{icon}</span> */}
        </div>
    )
}

export default InputComponent;