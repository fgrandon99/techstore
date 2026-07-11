function Header({ cartCount, onSearch }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-icono">🛍️</span> TechStore
      </div>

      <input
        type="text"
        className="header-buscador"
        placeholder="Buscar productos..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <div className="header-acciones">
        <button className="btn-login">Iniciar Sesión</button>
        <button className="btn-registro">Registrarse</button>
        <div className="header-carrito">🛒 <span>{cartCount}</span></div>
        <div className="header-redes">
          <a href="#">📘</a>
          <a href="#">📷</a>
          <a href="#">🐦</a>
        </div>
      </div>
    </header>
  );
}

export default Header;