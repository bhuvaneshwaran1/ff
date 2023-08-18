
const InputComponent = ({type,value,onChange,placeholder,icon}) => {
    return (
        <div className="input_icon">
            <input 
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder} />
           {/*  <span className="icon_user">{icon}</span> */}
        </div>
    )
}

export default InputComponent;