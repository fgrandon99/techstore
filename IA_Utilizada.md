# Herramientas IA utilizadas
Durante el desarrollo del trabajo se hizo uso de Claude y Github Copilot como guía para estructurar el proyecto, para la explicación de algunos conceptos dentro del codigo, la corrección de algunos errores, generación de estilos CSS y por sobre todo como ayuda para conectar el frontend con el server de base de datos.

# Prompts utilizados
**Prompt 1:**
"App.jsx:4 Uncaught SyntaxError: The requested module '/src/components/Banner.jsx' does not provide an export named 'default'"
- se utilizó para diagnosticar y corregir un error que impedía que la aplicación cargara (pagina en blanco). La IA fue de ayuda para indicar las causas probables, lo que permitió identificar que en el archivo simplemente no se habían guardado los cambios.

**Prompt 2:**
"ayudame a editar el diseño de la pagina, que se vea más bonita, usar tipos de fuente acorde, incorporar imágenes locales para los productos y usar una paleta de colores atractiva."
- se utilizó para definir un diseño visual "tech" el cual fue revisado y ajustado manualmente varias veces cambiando logos, iconos, colores, etc. hasta llegar a la versión definitiva.

**Prompt 3:**
"ayudame a agregar una funcion a un carrito de compras en una tienda online, quiero que al pinchar el carrito se vean los productos que se han ido agregando"
- se utilizó para implementar la funcionalidad de carrito desplegable en la tienda, incluyendo agregar y quitar productos.