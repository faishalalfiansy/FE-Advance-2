
const Miniatasone = (props) => {
    const { kls, childrenone, childrentwo , children } = props
    return (
        <section className={kls}>
            <h3>{childrenone}</h3>
            <p>{childrentwo} {children}</p>
        </section>
    )
}

export default Miniatasone