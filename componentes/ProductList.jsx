import { useState } from "react";

function ProductList({ lista, seleccionarProducto }) {
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    function ProductoSeleccionado(producto) {
        setProductoSeleccionado(productoSeleccionado?.id === producto.id ? null : producto);
    }

    return (
        <div>
            {lista.length === 0 ? (          //condición de lista vacía 
                <p>No hay productos disponibles.</p>
            ) : (                           //condición de lista con elementos
                lista.map((p) => (
                    <div className="lista"
                        key={p.id}
                        onClick={() => ProductoSeleccionado(p)}
                        // AGREGAR AL CSS al pasar el cursor lo sombrea style={{ cursor: 'pointer', marginBottom: '10px', padding: '5px', border: '1px solid #ccc' }}
                    >
                        <h3>{p.nombreProd}</h3>

                        {productoSeleccionado?.id === p.id && (
                            <div className="detalle-producto">
                                <p>ID: {p.id}</p>
                                <p>Nombre: {p.nombreProd}</p>
                                <p>Precio: ${p.precioUnitario}</p>
                                <p>Marca: {p.marca}</p>
                                <p>Descuento: {p.descuento?.toFixed(1)}%</p>
                                <p>Precio con Descuento: ${p.precioConDescuento?.toFixed(1)}</p>
                                <p>Stock: {p.stock}</p>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default ProductList;
