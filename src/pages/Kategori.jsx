import Isikategori from "/src/components/Organisme/Isikategori"
import Navberanda from '/src/components/Template/Navberanda'
import Footer from "/src/components/Organisme/Foterberanda"
const Kategori = () => {
    return (
       <>
       <div>
        <Navberanda />
       </div>
       <Isikategori />
       <div>
        <Footer />
       </div>
       </>
    )
}

export default Kategori