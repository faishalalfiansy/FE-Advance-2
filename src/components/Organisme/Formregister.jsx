import Inputan from "/src/components/Molecules/Logindaftar/Inputan";
import Inputanpass from "/src/components/Molecules/Logindaftar/Inputanpass";
import Buttonvsatu from "/src/components/Molecules/Logindaftar/Buttonvsatu";
import Lupapass from "/src/components/Molecules/Logindaftar/Lupapass";
import Atau from "/src/components/Molecules/Logindaftar/Atau";
import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import Inputnomor from '../Molecules/Logindaftar/Inputnomor'
import Input from "/src/components/atom/Input";
import { useNavigate } from 'react-router-dom'
import Logol from "/src/assets/image/logoGoogle.png";
import Bendera from "/src/assets/image/logoIndonesia.png"
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "/src/components/Store/Redux/userSlice.js";
import { getData, postData } from "/src/components/Service/api.js";

const Formregister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [dataUser, setDataUser] = useState({
    nama: "",
    email: "",
    telfon: "",
    password: "",
    repassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nama, email, telfon, password, repassword } = dataUser;

    if (password !== repassword) {
      alert("Password tidak sama!");
      return;
    } else if (password.length < 6) {
      alert("Password minimal 6 karakter!");
      return;
    }

    try {
      const users = await getData();
      const emailExists = users.some((user) => user.email === email);

      if (emailExists) {
        alert("Email sudah digunakan!");
        return;
      }

      const newUser = await postData({
        name: nama,
        email,
        phone: telfon,
        password,
      });

      dispatch(setUser(newUser));
      alert("Registrasi berhasil!");

      setDataUser({
        nama: "",
        email: "",
        telfon: "",
        password: "",
        repassword: "",
      });

    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat registrasi");
    }
  };

  const tologin = (path) => {
    navigate(path);
  };
    return (
      <>
      <div className='body-input'>
      <form onSubmit={handleSubmit}>
      <div className='box-input'>
        <Inputan  
        namaLabel="email"  
        kelasinput="input-field"  
        namaId="nama"   
        title="Nama Lengkap"
        namaE="nama"  
        isiValue={dataUser.nama}
        onChange={handleChange}  
        required>  
        <span>*</span>
        </Inputan>

        <Inputan  
        namaLabel="email"   
        kelasinput="input-field"  
        namaId="email" title="E-mail"
        namaE="email"  
        isiValue={dataUser.email}
        onChange={handleChange}   
        required>  
        <span>*</span>  
        </Inputan>

        <Inputnomor   
        sumber={Bendera}  
        kelasimg="idn"    
        idselect="kode"
        kelasinput="input-nomor" 
        namaId="telfon"  
        title="telfon" 
        namaE="telfon"
        isiValue={dataUser.telfon}
        onChange={handleChange}/> 

        <Inputanpass  
        namaLabel="password"  
        kelasinput="input-field"  
        namaId="password"   
        title="Kata Sandi" 
        namaE="password"
        isiValue={dataUser.password}
        onChange={handleChange}  
        required> 
        <span>*</span>  
        </Inputanpass>

        <Inputanpass  
        namaLabel="repassword"  
        kelasinput="input-field"  
        namaId="repassword"   
        title="Konfirmasi Kata Sandi" 
        namaE="repassword"
        isiValue={dataUser.repassword}
        onChange={handleChange}  
        required> 
        <span>*</span>  
        </Inputanpass>

      </div>
      <Lupapass children="Lupa Password?"/>
      <div className='box-submit'>
        <Buttonvsatu  
        kelasdiv="input-box"  
        kelastombol="regis"   
        typebutton="submit"
        id="daftar"
        > 
        {/* <Link to="/login">Daftar</Link>  */}
        Daftar
        </Buttonvsatu>

        <Buttonvsatu  
        kelasdiv="input-box"  
        kelastombol="punya"   
        typebutton="button"
        id="masuk"
        klik={() => tologin('/login')}> 
        {/* <Link to="/login">Masuk</Link>   */}
        Masuk
        </Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className='social'>
        <Buttongo typebutton="submit" kelastombol="google" sumber={Logol} kelasimg="logoG">
          <p>Daftar dengan Google</p>
        </Buttongo>
      </div>
      </form>
    </div>
    
      </>
    )
}

export default Formregister