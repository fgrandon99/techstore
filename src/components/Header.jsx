function Header({ cartCount, onSearch }) {
  return (
    <header className="header">
        <div className="header-logo">
          <img src="/icons/logo.jpg" alt="TechStore" className="header-logo-img" />
          TechStore
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
        <div className="header-redes">
          <a href="#"><img src="/icons/face.jpg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/insta.jpg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/tw.jpg" alt="Twitter" /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;