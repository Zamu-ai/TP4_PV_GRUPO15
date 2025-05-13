function ProductItem(modifi){
function eliminirProd() {
  modifi.onDelete(modifi.producto.id);
}
function modificarProd(){
  const NuevaDescripcion = prompt("Nueva Descripcion: ", modifi.producto.descripcion);
  if (nuevaDescripcion) {
    const productoActualizado = {
      id: props.producto.id,
      descripcion: nuevaDescripcion,
      precioUnitario: props.producto.precioUnitario,
      descuento: props.producto.descuento,
      precioConDescuento: props.producto.precioConDescuento
    };
    modifi.onEdit(productoActualizado);
  }
}
return (
  <div>
     <p>{modifi.producto.descripcion} -${modifi.producto.precioConDescuento}</p>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
  </div>
)
}
export default ProductItem;