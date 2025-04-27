import Miniatasone from "./Miniatasone"

const Miniatastwo = (props) => {
    const {sumber } = props
    return (
        <section className="instruktur">
            <img src={sumber} alt="" />
            <Miniatasone kls="info"childrenone="Faishal Alfiansyah" childrentwo="Senior IT Fullstack di"><span>Google</span> </Miniatasone>
        </section>
    )
}

export default Miniatastwo