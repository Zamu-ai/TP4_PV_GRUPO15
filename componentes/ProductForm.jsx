import { useState } from "react";

function ProductForm({prod}) {
    const [producto, setProducto] = useState(
        {   nombre:"",
            descripcion:"",
             precioUnitario:0,
             descuento:0,
        }
    );
     function cambiosEntrada(entra){
        const { name, value} = entra.target;
        setProducto((preventProd) => ({ ... preventProd, [name]: name === "precioUnitario" || name ==="descuento" ?
            Number(value) : value,}));
     }

function CalcularPrecioConDescuento(producto) {
    return producto.precioUnitario * (1- producto.descuento /100);
}
     

    function ProductoBase(agregar){
        agregar.preventDefault();
        prod({...producto, precioConDescuento: CalcularPrecioConDescuento(producto) });

        setProducto({
            nombre:"",
            descripcion:"",
            precioUnitario:0,
            descuento:0,
        });
    }
return(
    <form onSubmit={ProductoBase}>
<input type="text" name="nombreProd" placeholder="nombre de producto" value={producto.nombre} onChange={cambiosEntrada} />
<input type="text" name="descripcion" placeholder="descripcion" value={producto.descripcion} onChange={cambiosEntrada} />
<input type="number" name="precioUnitario" placeholder="precioUnitario" value={producto.precioUnitario} onChange={cambiosEntrada} />
<input type="number" name="descuento" placeholder="Descuento %" value={producto.descuento} onChange={cambiosEntrada} />
<button type="submit">Agregar Producto</button>

</form>

);
}
export default ProductForm;