import Input from "/src/components/atom/Input";
import Label from "/src/components/atom/Label";

const Inputan = (props) => {
    const { namaLabel, namaId, 
        title, kelasinput,children, 
        namaE, isiValue, onChange} = props;
    return (
        <div className="input-box">
            <Label namaLabel={namaLabel}> {title} {children}</Label>
            <Input typeInput="text" 
            kelasinput={kelasinput} 
            namaId={namaId}
            namaE= {namaE}
            isiValue={isiValue}
            onChange={onChange}  required />
        </div>
    )
}

export default Inputan