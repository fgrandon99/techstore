function Sidebar() {
  const beneficios = [
    { icono: '/icons/envio.jpg', texto: 'Envíos rápidos' },
    { icono: '/icons/pago.jpg', texto: 'Pago seguro' },
    { icono: '/icons/garantia.jpg', texto: 'Garantía extendida' },
    { icono: '/icons/soporte.jpg', texto: 'Soporte 24/7' },
  ];

  return (
    <aside className="sidebar">
      <h3>Beneficios</h3>
      <ul>
        {beneficios.map((beneficio) => (
          <li key={beneficio.texto}>
            <img src={beneficio.icono} alt={beneficio.texto} className="sidebar-icono" />
            {beneficio.texto}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;