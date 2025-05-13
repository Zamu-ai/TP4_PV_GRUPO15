import { useState} from "react";
import ProductForm from '../componentes/ProductForm.jsx';
import SearchBar from '../componentes/BuscaProducto';
import './App.css'
import ProductItem from '../componentes/ProductItem';
import ProductList from '../componentes/ProductList.jsx';

function App() {
   const [productos, setProductos] = useState([]); //hook de estados de producto
   const [productoSeleccionado, setproductoSeleccionado] = useState(null)


  const agregarProducto = (producto) => {     //funcion que permite agregar productos
    setProductos((prev) => [...prev, { ...producto, id: Math.floor(Math.random() * 1000) + 1 }]);
  };

  const seleccionarProducto = (producto) => { //selecciona el producto y llama al setproductoSeleccionado para visualizarlo
    setproductoSeleccionado(producto);
  };
 
const modificarProd = (productoModificado) => {  //recibe un producto y llama al hook setProductos, busca por el id del producto, si lo encuentra actualiza el valor sino deja el producto como está
    setProductos((prev) => prev.map(elemento => elemento.id == productoModificado.id ? productoModificado : elemento))
  }




  return (
<>
<div className='AgregarProducto'>
<ProductForm prod={agregarProducto} productoaModificar={productoSeleccionado} modifprod={modificarProd}/>
<h1>Agregue Productos</h1>
</div>

<div className='BuscarProducto'>
  <SearchBar/>
<h1>Busque su producto</h1>
</div>

<div className='ListaProducto'>
<ProductList lista={productos} seleccionarProducto={seleccionarProducto}/>   {/*llamo al componente lista y le paso el array de producto y el setproductos es para modificar o eliminar  */} 
</div>

 
<div className='EliminarModificarProductos'>
   {productoSeleccionado ? (
  <ProductItem producto={productoSeleccionado} setProductos={setProductos}  modificarProd={modificarProd}/>
   ):(
    <h2>seleccione producto</h2>
   )}
</div>



</>
  );
}

export default App;
