import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './css/tokens.css';
import './css/Navbar.css';
import './css/Header.css';
import './css/Banner.css';
import './css/ProductList.css';
import './css/Sidebar.css';
import './css/Footer.css';
import './css/Cart.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/productos`)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error al obtener los productos del servidor');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error(error);
        setError('No se pudieron cargar los productos. ¿Está el servidor corriendo?');
        setCargando(false);
      });
  }, []);

  const handleAddToCart = (producto) => {
    setCarrito((carritoActual) => {
      const yaExiste = carritoActual.find((item) => item._id === producto._id);

      if (yaExiste) {
        return carritoActual.map((item) =>
          item._id === producto._id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCarrito((carritoActual) => carritoActual.filter((item) => item._id !== id));
  };

  const cartCount = carrito.reduce((total, item) => total + item.cantidad, 0);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="App">
      <Header cartCount={cartCount} onSearch={setBusqueda} />
      <Navbar
        cartCount={cartCount}
        onToggleCarrito={() => setCarritoAbierto(!carritoAbierto)}
      />

      {carritoAbierto && (
        <Cart
          items={carrito}
          onRemove={handleRemoveFromCart}
          onClose={() => setCarritoAbierto(false)}
        />
      )}

      <Banner />

      <div className="contenido-principal">
        {cargando && <p style={{ padding: '30px' }}>Cargando productos...</p>}
        {error && <p style={{ padding: '30px', color: 'var(--danger)' }}>{error}</p>}
        {!cargando && !error && (
          <ProductList productos={productosFiltrados} onAddToCart={handleAddToCart} />
        )}
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;