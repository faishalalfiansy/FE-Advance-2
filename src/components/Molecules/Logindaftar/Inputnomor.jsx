import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import Option from "/src/components/atom/Option";
import Label from "/src/components/atom/Label";
import Input from "/src/components/atom/Input";
const Inputnomor = (props) => {
    const { sumber,kelasimg, idselect, kelasinput, namaId, title, namaE, isiValue, onChange} = props;
    return (
        <>
        <div className="konten-input1">
            <Label namaLabel="telfon" title="No. Hp"><span>*</span></Label>
        <div className="box-nomor">
            <div className="subone">
                <Buttongo typebutton="submit" kelastombol="lkode" sumber={sumber} kelasimg={kelasimg} />
            </div>
            <div className="subtwo">
                <Option idselect={idselect}>
                <option value="1">+62</option>
                <option value="2">+33</option>
                <option value="3">+44</option>
                </Option>
            </div>
            <div className="subtree">
                <Input typeInput="text" 
                        kelasinput={kelasinput}
                        namaId={namaId} 
                        title={title} 
                        namaE={namaE}
                        isiValue={isiValue}
                        onChange={onChange}
                        required/> 
            </div>
        </div>
        </div>
        </>
    )
}

export default Inputnomor