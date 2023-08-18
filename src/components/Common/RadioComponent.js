const RadioComponent = ({options, radioSelect , onChange}) => {
    return (
        <div className="input_icon">
            {options?.map((option) => (
                <label key={option.value}>
                    <input className="radio_text"
                    //name='radioOptions'
                    type="radio"
                    value={option.value}
                    checked={radioSelect === option.value}
                    onChange={()=>onChange(option.value)}
                    />
                     {option.label}
                </label>
            ))}
        </div>
    )
}

export default RadioComponent;