const Minibawah = (props) => {
  const { bintang1, bintang2, bintang3, bintang4, bintang5, rating, harga } = props;
  return (
    <>
      <section className="rating">
        <section className="bintang">
          <li>
            <img src={bintang1} alt="" />
          </li>
          <li>
            <img src={bintang2} alt="" />
          </li>
          <li>
            <img src={bintang3} alt="" />
          </li>
          <li>
            <img src={bintang4} alt="" />
          </li>
          <li>
            <img src={bintang5} alt="" />
          </li>
        </section>
        <p>{rating}</p>
      </section>
      <section className="harga">
        <h3>{harga}</h3>
      </section>
    </>
  );
};

export default Minibawah;
