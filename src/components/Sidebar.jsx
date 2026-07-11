function Sidebar() {
  const beneficios = [
    { icono: '🚚', texto: 'Envíos rápidos' },
    { icono: '🔒', texto: 'Pago seguro' },
    { icono: '🛡️', texto: 'Garantía extendida' },
    { icono: '🎧', texto: 'Soporte 24/7' },
  ];

  return (
    <aside className="sidebar">
      <h3>Beneficios</h3>
      <ul>
        {beneficios.map((beneficio) => (
          <li key={beneficio.texto}>
            <span className="sidebar-icono">{beneficio.icono}</span>
            {beneficio.texto}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;