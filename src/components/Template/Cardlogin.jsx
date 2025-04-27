import Judul from '/src/components/Molecules/Logindaftar/Judul'
import Formlogin from '/src/components/Organisme/Formlogin'

const Cardlogin = () => {
    return (
        <div className="cards">
                <Judul kelasjudul="login-header" titleHeader="Masuk ke Akun" titleSubjudul="Yuk, lanjutin belajarmu di videobelajar"/>
                <Formlogin/>
        </div>
    )
}
export default Cardlogin