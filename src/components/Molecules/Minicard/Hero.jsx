
const Hero = (props) => {
    const { klshero, idisisatu, isisatu, isidua, children, idp } = props;
  return (
    <section className={klshero}>
      <h1 id={idisisatu}>
        {isisatu}
      </h1>
      <p id={idp}>
        {isidua}
      </p>
      {children}
    </section>
  );
};

export default Hero;
