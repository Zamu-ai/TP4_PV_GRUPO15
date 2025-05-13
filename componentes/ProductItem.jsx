function ProductItem(producto){

return(
<div>
  <h2 class="titulo-detalle">DETALLE DE PRODUCTO</h2>
    <p>id: `${producto.id}` </p>
    <p>nombre: `${producto.nombre}` </p>
    <p>precio: `${producto.precio}` </p>
    <p>descripcion: `${producto.descripcion}` </p>
    <p>descuento: `${producto.descuento}` </p>
    <p>precioConDescuento: `${producto.precioConDescuento}` </p>
    <p>stock: `${producto.stock}` </p>
</div>
)

}
export default ProductItem




















// function ProductItem(modifi){

// function eliminarProd() {
//   modifi.onDelete(modifi.producto.id);
// }

// function modificarProd(){
//   const NuevaDescripcion = prompt("Nueva Descripcion: ", modifi.producto.descripcion);
//   if (NuevaDescripcion) {
//     const productoActualizado = {
//       id: props.producto.id,
//       descripcion: NuevaDescripcion,
//       precioUnitario: props.producto.precioUnitario,
//       descuento: props.producto.descuento,
//       precioConDescuento: props.producto.precioConDescuento
//     };
//     modifi.onEdit(productoActualizado);
//   }
// }
// return (
//   <div>
//      <p>{modifi.producto.descripcion} -${modifi.producto.precioConDescuento}</p>
//       <button onClick={modificarProd}>Editar</button>
//       <button onClick={eliminarProd}>Eliminar</button>
//   </div>
// )
// }
// export default ProductItem;