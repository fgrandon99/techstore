function Banner(){
  return (
    <section className="banner">
      <div className="banner-texto">
        <h1>La tecnología que lleva tu mundo al siguiente nivel</h1>
        <p>Descubre los mejores productos en tecnología con las mejores ofertas.</p>
        <button className="banner-boton">Ver ofertas →</button>
      </div>
      <div className="banner-imagen">
        <img src="https://placehold.co/500x300?text=Productos+Tech" alt="Productos tecnológicos" />
      </div>
    </section>
  );
}

export default Banner;