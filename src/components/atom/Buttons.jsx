const Buttons = (props) => {
    const { typebutton, children, kelastombol, klik } = props
    return (
        <button type={typebutton} className={kelastombol} onClick={klik}>{children}</button>
    )
}

export default Buttons