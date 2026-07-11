import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import productosData from './data/productos.json';
import './css/Navbar.css';
import './css/Header.css';
import './css/Banner.css';
import './css/ProductList.css';
import './css/Sidebar.css';
import './css/Footer.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [busqueda, setBusqueda] = useState('');

  const handleAddToCart = (producto) => {
    setCartCount(cartCount + 1);
  };

  const productosFiltrados = productosData.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="App">
      <Header cartCount={cartCount} onSearch={setBusqueda} />
      <Navbar cartCount={cartCount} />
      <Banner />

      <div className="contenido-principal">
        <ProductList productos={productosFiltrados} onAddToCart={handleAddToCart} />
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}

export default App;