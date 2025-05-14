function ProductItem({producto,setProductos,modificarProd}){
   //const [Modificar, setModificar] = useState(); //hook de estados de producto

const Eliminar = () => {
   setProductos(productos => productos.filter(elementos => elementos.id !== producto.id))
};   

const ModificarProd= () => { //funcion que llama a modificarprod con el producto seleccionado
 modificarProd({...producto})

};

return(
<div className="detalle-producto">
  <h2 className="titulo-detalle">DETALLE DE PRODUCTO</h2>
    <p>id: {producto.id} </p>
    <p>nombre: {producto.nombreProd} </p>
    <p>precio: {producto.precioUnitario} </p>
    <p>descripcion: {producto.descripcion} </p>
    <p>descuento: {producto.descuento} </p>
    <p>precioConDescuento: {producto.precioConDescuento.toFixed(2)} </p>
    <p>stock: {producto.stock} </p>

<button onClick={Eliminar}>Eliminar producto</button>
<button onClick={ModificarProd}>Modificar producto</button>

</div>
)

}
export default ProductItem