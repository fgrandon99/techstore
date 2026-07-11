import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  valoracion: {
    type: Number,
    default: 0,
  },
  categoria: {
    type: String,
    default: 'General',
  },
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;