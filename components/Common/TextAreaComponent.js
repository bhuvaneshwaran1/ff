const TextAreaComponent = ({ label, error, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                placeholder="Enter your address"
                row={5} />
            {error && <span className="input_error_span">{error}</span>}
        </div>
    )
}
export default TextAreaComponent;