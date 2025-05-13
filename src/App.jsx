import { useState} from "react";
import ProductForm from '../componentes/ProductForm.jsx';
import SearchBar from '../componentes/BuscaProducto';
import './App.css'
import ProductItem from '../componentes/ProductItem';
import ProductList from '../componentes/ProductList.jsx';

function App() {
   const [productos, setProductos] = useState([]);

  // useEffect(() => {
  //   console.log("Cargando productos iniciales...");
  //   setProductos(ProductForm);
  // }, []);
 
  const agregarProducto = ((producto) => {
    setProductos((prev) => [...prev, { ...producto, id: Math.random() }]);
  }, []);

  // const eliminarProducto = useCallback((id) => {
  //   setProductos((prev) => prev.filter((p) => p.id !== id));
  // }, []);

  // const modificarProducto = useCallback((productoEditado) => {
  //   setProductos((prev) =>
  //     prev.map((p) => (p.id === productoEditado.id ? productoEditado : p))
  //   );
  // }, [])

  return (
<>
<div className='AgregarProducto'>
<ProductForm prod={agregarProducto}/>
<h1>Agregue Productos</h1>
</div>

<div className='BuscarProducto'>
  <SearchBar/>
<h1>Busque su producto</h1>
</div>

<div className='ListaProducto'>
<ProductList lista={productos} setProductos={setProductos}/>
</div>

<div className='EliminarModificarProductos'>
  <ProductItem/>
</div>


</>
  );
}

export default App;
