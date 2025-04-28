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
import { useDispatch } from "react-redux";
import { setUser } from "/src/components/Store/Redux/userSlice.js";
import { getData } from "/src/components/Service/api.js";

const Formlogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Email dan password harus diisi!");
      return;
    }

    try {
      const users = await getData();
      const user = users.find((u) => u.email === loginData.email);

      if (!user) {
        alert("Email tidak ditemukan!");
        return;
      }

      if (user.password !== loginData.password) {
        alert("Password salah!");
        return;
      }

      dispatch(setUser(user));
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
