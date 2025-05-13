import ProductItem from "./ProductItem";

function ProductList({lista}){
    return(
        <div>
            <h2>LISTA DE PRODUCTOS</h2>
            {lista.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
                lista.map(p => (
                    <ProductItem key={p.id} producto={p} onDelete={lista.onDelete} onEdit={lista.onEdit} />
                 )
            ))}
        </div>
    );
}
export default ProductList;
