import { useState } from 'react';

function Navbar({ cartCount, onToggleCarrito }) {
  const [menuActivo, setMenuActivo] = useState('Inicio');

  const opciones = ['Inicio', 'Productos', 'Ofertas', 'Nosotros', 'Contacto'];

  return (
    <nav className="navbar">
      <ul className="navbar-lista">
        {opciones.map((opcion) => (
          <li
            key={opcion}
            className={menuActivo === opcion ? 'activo' : ''}
            onClick={() => setMenuActivo(opcion)}
          >
            {opcion}
          </li>
        ))}
      </ul>
      <div className="navbar-carrito" onClick={onToggleCarrito}>
        🛒 Carrito ({cartCount})
      </div>
    </nav>
  );
}

export default Navbar;