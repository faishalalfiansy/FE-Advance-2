import HeaderCard from "../../atom/HeaderCard";
import SubJudul from "/src/components/atom/SubJudul";
const Judul = (props) => {
    const { titleHeader, titleSubjudul, kelasjudul } = props
    return (
        <div className={kelasjudul}>
            <HeaderCard> {titleHeader} </HeaderCard>
            <SubJudul> {titleSubjudul} </SubJudul>
        </div>
    )
}

export default Judul;