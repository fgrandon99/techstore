function Footer() {
  const infoCompra = [
    { icono: '💳', texto: 'Hasta 12 cuotas sin interés' },
    { icono: '🚚', texto: 'Despachos en 24 a 48 horas' },
    { icono: '🔄', texto: 'Devoluciones fáciles' },
    { icono: '✅', texto: 'Calidad garantizada' },
  ];

  return (
    <>
      <div className="barra-inferior">
        {infoCompra.map((item) => (
          <div key={item.texto} className="barra-inferior-item">
            <span>{item.icono}</span> {item.texto}
          </div>
        ))}
      </div>

      <footer className="footer">
        <div className="footer-contenido">
          <h3>TechStore Chile</h3>
          <p>📍 Av. Siempre Viva 123, Concepción, Chile</p>
          <p>✉️ contacto@techstore.cl</p>
          <p>📞 +56 9 1234 5678</p>
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