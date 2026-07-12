function Footer() {
  const infoCompra = [
    { icono: '/icons/cuota.jpg', texto: 'Hasta 12 cuotas sin interés' },
    { icono: '/icons/envio.jpg', texto: 'Despachos en 24 a 48 horas' },
    { icono: '/icons/devoluciones.jpg', texto: 'Devoluciones fáciles' },
    { icono: '/icons/calidad.jpg', texto: 'Calidad garantizada' },
  ];

  return (
    <>
      <div className="barra-inferior">
        {infoCompra.map((item) => (
          <div key={item.texto} className="barra-inferior-item">
            <img src={item.icono} alt={item.texto} className="barra-inferior-icono" />
            {item.texto}
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-contenido">
          <h3>TechStore Chile</h3>
          <p>Av. Ricardo Vicuña 363, Los Angeles, Chile</p>
          <p>contacto@techstore.cl</p>
          <p>+56 9 1234 5678</p>
          <div className="footer-redes">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <p className="footer-derechos">
          © {new Date().getFullYear()} TechStore Chile. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export default Footer;