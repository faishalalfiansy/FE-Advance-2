const Option = (props) => {
    const {idselect, children } = props
    return (
        <select id={idselect}>
            {children}
        </select>
    )
}
export default Option