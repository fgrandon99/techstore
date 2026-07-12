function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url('/img/banner.jpg')` }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-texto">
        <h1>La tecnología que lleva tu mundo al siguiente nivel</h1>
        <p>Descubre los mejores productos en tecnología con las mejores ofertas.</p>
        <button className="banner-boton">Ver ofertas →</button>
      </div>
    </section>
  );
}

export default Banner;