function ProductCard({ producto, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="product-precio">
        ${producto.precio.toLocaleString('es-CL')}
      </p>
      <p className="product-valoracion">
        {'★'.repeat(producto.valoracion)}{'☆'.repeat(5 - producto.valoracion)}
      </p>
      <button
        className="product-boton"
        onClick={() => onAddToCart(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;