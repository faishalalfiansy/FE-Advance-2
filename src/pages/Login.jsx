import Navbar from "/src/components/Molecules/Navbar"
import Cardlogin from "/src/components/Template/Cardlogin"
import '/src/pages/Login.css'
const Login = () => {
    return (
        <>
        <Navbar/>
        <div className='bodyLogin'>
            <Cardlogin/>
        </div>
        </>
    )
}

export default Login