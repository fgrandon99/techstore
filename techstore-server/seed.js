import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Producto from './models/Producto.js';
import productosData from './data/productos.json' with { type: 'json' };

dotenv.config();

const importarProductos = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');

    await Producto.deleteMany();
    console.log('Productos anteriores eliminados');

    await Producto.insertMany(productosData);
    console.log('Productos importados correctamente');

    process.exit();
  } catch (error) {
    console.error('Error al importar productos:', error);
    process.exit(1);
  }
};

importarProductos();