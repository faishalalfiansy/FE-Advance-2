import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg"
import Label from "/src/components/atom/Label"
import Bendera from "/src/assets/image/logoIndonesia.png"
const Nomor = (props) => {
    const { } = props
    return (
    <>
      <Label htmlFor="nomor">Nomor Telepon</Label>
      <Buttongo typebutton="submit" kelastombol="ikode" sumber={Bendera} kelasimg="idn"/>
    </>
    )
}