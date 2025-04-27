import Inputan from "/src/components/Molecules/Logindaftar/Inputan";
import Inputanpass from "/src/components/Molecules/Logindaftar/Inputanpass";
import Buttonvsatu from "/src/components/Molecules/Logindaftar/Buttonvsatu";
import Lupapass from "/src/components/Molecules/Logindaftar/Lupapass";
import Atau from "/src/components/Molecules/Logindaftar/Atau";
import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import Logol from "/src/assets/image/logoGoogle.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import userStore from "/src/components/Store/UserStore";

const Formlogin = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const setUser = userStore((state) => state.setUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert("Email dan password harus diisi!");
      return;
    }
    try {
      const res = await axios.get("https://67f1488ac733555e24acb4bb.mockapi.io/users");

      // cek email
      const user = res.data.find((u) => u.email === loginData.email);

      if (!user) {
        alert("Email tidak ditemukan!");
        return;
      }

      // cek password
      if (user.password !== loginData.password) {
        alert("Password salah!");
        return;
      }

      setUser(user);
      alert("Login berhasil!");
      navigate("/beranda");

    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat login");
    }
  };
  const klik = (path) => {
    navigate(path);
  };
  return (
    <>
    <div className="body-input">
      <form onSubmit={handleSubmit}>
      <div className="box-input">
        <Inputan namaLabel="email" 
        kelasinput="input-field" 
        namaId="email" 
        title="E-mail"
        namaE="email"  
        isiValue={loginData.email}
        onChange={handleChange} >
          <span>*</span>
        </Inputan>
        <Inputanpass namaLabel="password" 
        kelasinput="input-field" 
        namaId="password" 
        title="Kata Sandi"
        namaE="password"
        isiValue={loginData.password}
        onChange={handleChange}
        >
          <span>*</span>
        </Inputanpass>
      </div>
      <Lupapass children="Lupa Password?" />
      <div className="box-submit">
        <Buttonvsatu kelasdiv="input-box masuk" kelastombol="masuk" typebutton="submit">
          <Link to="/beranda">Masuk</Link>
        </Buttonvsatu>
        <Buttonvsatu kelasdiv="input-box daftar" kelastombol="daftar" typebutton="button" klik={() => klik("/register")}>
          <Link to="/register">Daftar</Link>
        </Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className="social">
        <Buttongo typebutton="submit" kelastombol="google" sumber={Logol} kelasimg="logoG">
          <p>Masuk dengan Google</p>
        </Buttongo>
      </div>
      </form>
    </div>
    </>
  );
};

export default Formlogin;
