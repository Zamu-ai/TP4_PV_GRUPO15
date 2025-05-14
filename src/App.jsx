import { useState} from "react";
import ProductForm from '../componentes/ProductForm.jsx';
import BuscaProducto from '../componentes/BuscaProducto';
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
 
const modificarProd = (productoModificado) => {
  if (productoModificado === null) {
  
    setproductoSeleccionado(null);
    return;
  }

  setProductos((prev) =>
    prev.map(elemento =>
      elemento.id === productoModificado.id ? productoModificado : elemento
    )
  );

  setproductoSeleccionado(null);
};





  return (
    <>
    <div className="contenedorPrincipal">
      <div className="AgregarProducto">
        <h1 className="titulo-agregar">Agregar Producto</h1>
        <ProductForm prod={agregarProducto} productoaModificar={productoSeleccionado} modifprod={modificarProd}/>
      </div>

      <div className="BuscarProducto">
        <h1 className="titulo-buscar">Buscar producto</h1>
        <BuscaProducto productos={productos}/>
      </div>

      <div className="ListaProducto">
        <h2 className="titulo-lista">LISTA DE PRODUCTOS</h2>
        <ProductList lista={productos} seleccionarProducto={seleccionarProducto}/>  
      </div>

      <div className="EliminarModificarProductos">
        {productoSeleccionado ? (
          <ProductItem producto={productoSeleccionado} setProductos={setProductos} modificarProd={modificarProd}/>
        ) : (
          <h2>Seleccione un producto</h2>
        )}
      </div>
      </div>
    </>
  );
}

export default App;
