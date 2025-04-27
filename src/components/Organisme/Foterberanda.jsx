import Logol from "/src/assets/image/logoUtama.png"
import Panah from "/src/assets/image/icon-panah.png"
import Iconsatu from "/src/assets/image/icon1.png"
import Icondua from "/src/assets/image/icon2.png"
import Icontiga from "/src/assets/image/icon3.png"
import Iconempat from "/src/assets/image/icon4.png"


const Footerberanda = () => {
  return (
    <>
        <div className="footer">
          <div className="container-footer">
            <section className="isi-footer">
              <section className="isi1-footer">
                <img src={Logol} alt="" />
                <p>
                  <span>
                    Gali Potensi Anda Melalui Pembelajaran Video di Vbelajar.id
                  </span>
                </p>
                <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                <p>+62 878-8873-5133</p>
              </section>
              <section className="isi2-footer">
                <section className="pilihan-footer">
                  <li>
                    <span>Kategori</span>
                  </li>
                  <li>
                    <a href="">Digital & Teknologi</a>
                  </li>
                  <li>
                    <a href="">Pemasaran</a>
                  </li>
                  <li>
                    <a href="">Manajemen Bisnis</a>
                  </li>
                  <li>
                    <a href="">Pengembangan Diri</a>
                  </li>
                  <li>
                    <a href="">Desain</a>
                  </li>
                </section>
                <section className="pilihan-footer">
                  <li>
                    <span>Perusahaan</span>
                  </li>
                  <li>
                    <a href="">Tentang Kami</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Kebijakan Privasi</a>
                  </li>
                  <li>
                    <a href="">Ketentuan Layanan</a>
                  </li>
                  <li>
                    <a href="">Bantuan</a>
                  </li>
                </section>
                <section className="pilihan-footer">
                  <li>
                    <span>Komunitas</span>
                  </li>
                  <li>
                    <a href="">Tips Sukses</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </section>
                <section className="panah">
                  <img src={Panah} alt="" />
                  <img src={Panah} alt="" />
                  <img src={Panah} alt="" />
                </section>
              </section>
            </section>
            <hr />
            <section className="akhir-footer">
              <section>
                <p>&copy;2024 PT Noriba Goberkah Jaya Tbk</p>
              </section>
              <section className="icon-footer">
                <img src={Iconsatu} alt="" />
                <img src={Icondua} alt="" />
                <img src={Icontiga} alt="" />
                <img src={Iconempat} alt="" />
              </section>
            </section>
          </div>
        </div>
    </>
  );
};

export default Footerberanda;