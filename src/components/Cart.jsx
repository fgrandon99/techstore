function Cart({ items, onRemove, onClose }) {
  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Tu carrito</h3>
          <button className="cart-cerrar" onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <p className="cart-vacio">Aún no has agregado productos.</p>
        ) : (
          <>
            <ul className="cart-lista">
              {items.map((item) => (
                <li key={item._id} className="cart-item">
                  <img src={item.imagen} alt={item.nombre} />
                  <div className="cart-item-info">
                    <p className="cart-item-nombre">{item.nombre}</p>
                    <p className="cart-item-detalle">
                      {item.cantidad} x ${item.precio.toLocaleString('es-CL')}
                    </p>
                  </div>
                  <button
                    className="cart-item-quitar"
                    onClick={() => onRemove(item._id)}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toLocaleString('es-CL')}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;