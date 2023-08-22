const RadioComponent = ({label,options, radioSelect , onChange,error}) => {
    return (
        <div  >
             {label}
            {options?.map((option) => (
                <label className="radio_btncss" key={option.value}>  
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
             {error && <span className="input_error_span">{error}</span>}
        </div>
    )
}

export default RadioComponent;