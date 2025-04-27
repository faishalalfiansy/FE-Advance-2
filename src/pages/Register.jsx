import Navbar from "/src/components/Molecules/Navbar"
import Cardregister from "/src/components/Template/Cardregister"
import '/src/pages/Register.css'
const Register = () => {
    return (
        <>
        <Navbar/>
        <div className='bodyLogin'>
            <Cardregister/>
        </div>
        </>
    )
}

export default Register