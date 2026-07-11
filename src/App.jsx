import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import './css/Navbar.css';
import './css/Header.css';
import './css/Banner.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [busqueda, setBusqueda] = useState('');

  return (
    <div className="App">
      <Header cartCount={cartCount} onSearch={setBusqueda} />
      <Navbar cartCount={cartCount} />
      <Banner />
    </div>
  );
}

export default App;