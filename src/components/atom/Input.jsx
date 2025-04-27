const Input = (props) => {
    const { typeInput, namaId, kelasinput, namaE, isiValue, onChange } = props
    return (
        <input type={typeInput} 
        className={kelasinput} 
        id={namaId} 
        name={namaE} 
        value={isiValue} 
        onChange={onChange} required />
    )
}

export default Input