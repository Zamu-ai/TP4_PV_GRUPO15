import { useState, useEffect, useCallback} from "react";
import ProductForm from '../componentes/ProductoDeBase';
import SearchBar from '../componentes/BuscaProducto';
import './App.css'
import ProductItem from '../componentes/EliminarModificarProducto';
import ProductList from '../componentes/ModificarProductos';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("Cargando productos iniciales...");
    setProductos(ProductosDeBase);
  }, []);
 
  const agregarProducto = useCallback((producto) => {
    setProductos((prev) => [...prev, { ...producto, id: Date.now() }]);
  }, []);

  const eliminarProducto = useCallback((id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const modificarProducto = useCallback((productoEditado) => {
    setProductos((prev) =>
      prev.map((p) => (p.id === productoEditado.id ? productoEditado : p))
    );
  }, [])

  return (
<>
<div className='AgregarProducto'>
<ProductForm/>
<h1>Agregue Productos</h1>
</div>

<div className='BuscarProducto'>
  <SearchBar/>
<h1>Busque su producto</h1>
</div>

<div className='ListaProducto'>
<ProductList/>
</div>
<div className='EliminarModificarProductos'>
  <ProductItem/>
</div>



</>
  );
}

export default App;
