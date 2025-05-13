import ProductItem from "./EliminarModificarProducto";
function ProductList(lista){
    return(
        <div>
            {lista.producto.map(p => (
                <ProductItem key={p.id} producto={p} onDelete={lista.onDelete} onEdit={lista.onEdit} />
            ))}
        </div>
    );
}
export default ProductList;