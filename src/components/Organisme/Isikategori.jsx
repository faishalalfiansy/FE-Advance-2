import "/src/pages/Kategori.css";
import Cardkelas from "/src/components/Molecules/Minicard/Cardkelas";
import isiCard from "../Molecules/Minicard/IsiCard";
import ImgBuku from "/src/assets/image/Notebook.png";
import ImgArrow from "/src/assets/image/KeyboardArrowDown.png"
import ImgBag from "/src/assets/image/Shopping_Bag_01.png"
import ImgClock from "/src/assets/image/Clock.png"
import ImgArrowU from "/src/assets/image/iconUrutkan.png"
import Imgsearch from "/src/assets/image/Search.png"
import ImgaArrowPage from "/src/assets/image/arrowpage.png"
import Buttons from "../atom/Buttons";
import { useState } from "react";

const Isikategori = () => {
    const [openDropdown, setOpenDropdown] = useState({
        bidangStudi: false,
        harga: false,
        durasi: false,
      });

      const toggleDropdown = (key) => {
        setOpenDropdown((prev) => ({
          ...prev,
          [key]: !prev[key],
        }));
      };

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (
        <>
        <div className="container-kategori">
        <div className="box-judul">
            <h1>Koleksi Video Pembelajaran Unggulan</h1>
            <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        <div className="container-body">

            {/* bagian fillter */}
            <div className="box-filter">
            <div className="filter">
                <p>Filter</p>
                <span>Reset</span>
            </div>
                {/* bagian bidang studi */}
                <div className="card-kategori">
                    <div className="pil-kategori" onClick={() => toggleDropdown("bidangStudi")}>
                    <img src={ImgBuku} alt="" />
                    <p>Bidang Studi</p>
                    <img src={ImgArrow} alt="" className={openDropdown.bidangStudi ? "arrow-rotate" : ""} />
                    </div>
                    {openDropdown.bidangStudi && (
                    <div className="pil-check">
                        <section className="check">
                        <input type="checkbox" id="pemasaran" name="pemasaran" />
                        <label htmlFor="pemasaran">Pemasaran</label>
                        </section>

                        <section className="check">
                        <input type="checkbox" id="digitekno" name="digitekno" />
                        <label htmlFor="digitekno">Digital & Teknologi</label>
                        </section>

                        <section className="check">
                        <input type="checkbox" id="pengemdiri" name="pengemdiri" />
                        <label htmlFor="pengemdiri">Pengembangan Diri</label>
                        </section>

                        <section className="check">
                        <input type="checkbox" id="bisnisman" name="bisnisman" />
                        <label htmlFor="bisnisman">Bisnis Manajemen</label>
                        </section>

                    </div>
                    )}
                </div>
                {/* bagian Harga */}
                <div className="card-kategori">
                    <div className="pil-kategori" onClick={() => toggleDropdown("harga")}>
                    <img src={ImgBag} alt="" />
                    <p>Harga</p>
                    <img src={ImgArrow} alt="" className={openDropdown.harga ? "arrow-rotate" : ""} />
                    </div>
                    {openDropdown.harga && (
                    <div className="pil-check">
                        <section className="check">
                        <input type="checkbox" id="pemasaranH" name="pemasaranH" />
                        <label htmlFor="pemasaranH">Pemasaran</label>
                        </section>

                        <section className="check">
                        <input type="checkbox" id="digiteknoH" name="digiteknoH" />
                        <label htmlFor="digiteknoH">Digital & Teknologi</label>
                        </section>

                        <section className="check">
                        <input type="checkbox" id="pengemdiriH" name="pengemdiriH" />
                        <label htmlFor="pengemdiriH">Pengembangan Diri</label>
                        </section>

                        <section className="check">
                        <input type="checkbox" id="bisnismanH" name="bisnismanH" />
                        <label htmlFor="bisnismanH">Bisnis Manajemen</label>
                        </section>

                    </div>
                    )}
                </div>
                {/* bagian Durasi */}
                <div className="card-kategori">
                    <div className="pil-kategori" onClick={() => toggleDropdown("durasi")}>
                    <img src={ImgClock} alt="" />
                    <p>Durasi</p>
                    <img src={ImgArrow} alt="" className={openDropdown.durasi ? "arrow-rotate" : ""} />
                    </div>
                    {openDropdown.durasi && (
                    <div className="pil-check">
                        <section className="radio">
                        <input type="checkbox" id="empatjam" name="empatjam" />
                        <label htmlFor="empatjam">Kurang Dari 4 Jam</label>
                        </section>

                        <section className="radio">
                        <input type="checkbox" id="empatup" name="empatup" />
                        <label htmlFor="empatup">4 - 8 Jam</label>
                        </section>

                        <section className="radio">
                        <input type="checkbox" id="delapanup" name="delapanup" />
                        <label htmlFor="delapanup">Lebih Dari 8 Jam</label>
                        </section>

                    </div>
                    )}
                </div>
            </div>
            {/* akhir bagian filter */}

            {/* bagian isi kategori */}
            <div className="box-isikategori">
                {/* bagian pencarian */}
                <div className="box-pencarian">
                    <button type="button" onClick={toggleMenu}>Urutkan <img src={ImgArrowU} alt="" /></button>
                    {isMenuOpen && (
                        <div className="urutkan">
                        <Buttons typebutton="button" kelastombol="btn-urutkan">Harga Rendah</Buttons>
                        <Buttons typebutton="button" kelastombol="btn-urutkan">Harga Tinggi</Buttons>
                        <Buttons typebutton="button" kelastombol="btn-urutkan">A to Z</Buttons>
                        <Buttons typebutton="button" kelastombol="btn-urutkan">Z to A</Buttons>
                        <Buttons typebutton="button" kelastombol="btn-urutkan">Ratting Tertinggi</Buttons>
                        <Buttons typebutton="button" kelastombol="btn-urutkan">Ratting Terendah</Buttons>
                    </div>
                    )}
                    <input type="text" placeholder="Cari Kelas"/>
                    <img src={Imgsearch} alt="" />
                </div>
                {/* akhir bagian pencarian */}

                {/* bagian isi card kategori */}
                <div className="box-isiCardBeranda">
                    {isiCard.slice(0, 6).map((item) => (
                    <Cardkelas
                    containerCard="card-kelas"
                    key={item.id}
                    sumber={item.sumber}
                    judulKelas={item.judulKelas}
                    deskripsi={item.deskripsi}
                    />
                    ))}
                </div>
                {/* akhir bagian isi card kategori */}
                
                {/* bagian page halaman */}
                <div className="box-pageHalaman">
                    <div className="button-pagehalaman">
                        <button className="btn-arrowhalaman"><img src={ImgaArrowPage} alt="" /></button>
                        <div className="nomorhalaman">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        </div>
                        <button className="btn-arrowhalaman"><img src={ImgaArrowPage} alt="" /></button>
                    </div>
                </div>
            {/* akhir bagian page halaman */}
            
            </div>
            {/* akhir bagian isi kategori */}
            
        </div>
        </div>
        
        </>
        
    );
};

export default Isikategori;