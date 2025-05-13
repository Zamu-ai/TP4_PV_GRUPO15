import ProductItem from "./ProductItem";

function ProductList(lista){
    return(
        <div>
            <h2>LISTA DE PRODUCTOS</h2>
            {lista.producto.map(p => (
                <ProductItem key={p.id} producto={p} onDelete={lista.onDelete} onEdit={lista.onEdit} />
            ))}
        </div>
    );
}
export default ProductList;
