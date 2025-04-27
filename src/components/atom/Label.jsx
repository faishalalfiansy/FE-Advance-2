const Label = (props) => {
    const { namaLabel, children } = props
    return (
        <label htmlFor={namaLabel}> {children} </label>
    )
}

export default Label