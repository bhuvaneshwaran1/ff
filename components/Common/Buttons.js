const Buttons = ({type,label,onClick}) => {
    return (
        <button className="buttons"
        type={type}
        onClick={onClick}>{label}</button>
    )
}

export default Buttons