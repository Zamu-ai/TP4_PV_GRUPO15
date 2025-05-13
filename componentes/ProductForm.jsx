import { useState,useEffect } from "react";

function ProductForm({prod,productoaModificar,modifprod}) {
    const [producto, setProducto] = useState (
        {   nombreProd:"",
            descripcion:"",
             precioUnitario:0,
             descuento:0,
             stock:0,
        }
    );

    useEffect(() => {if (productoaModificar) {setProducto ({...productoaModificar})}
    },[productoaModificar]) //detecta cambios en producto a modificar y llama al hook setProducto

     function cambiosEntrada(entra){
        const { name, value} = entra.target;
        setProducto((preventProd) => ({ ... preventProd, [name]: name === "precioUnitario" || name ==="descuento" ?
            Number(value) : value,}));
     }

function CalcularPrecioConDescuento(producto) {
    return producto.precioUnitario * (1- producto.descuento /100);
}
     

    function ProductoBase(agregar){   //la funcion diferencia si agrego o modifico un producto
        agregar.preventDefault();
        if (productoaModificar) // si hay producto a modificar llamo a la funcion modifprod
        {
            modifprod ({...producto,precioConDescuento: CalcularPrecioConDescuento})
        }
        else  //caso contrario se usa para agregar producto
        {prod({...producto, precioConDescuento: CalcularPrecioConDescuento(producto) });} 

        setProducto({
            nombreProd:"",
            descripcion:"",
            precioUnitario:0,
            descuento:0,
            stock:0,
            
        });
        
    }
return(
    <form className="formulario" onSubmit={ProductoBase}>
     
        <label >Nombre del producto
         <input type="text" name="nombreProd" placeholder="nombre de producto" value={producto.nombreProd} onChange={cambiosEntrada} />
        </label>
        <label>Descripcion del producto
            <input type="text" name="descripcion" placeholder="descripcion" value={producto.descripcion} onChange={cambiosEntrada} />
        </label>
        <label>precio
            <input type="number" name="precioUnitario" value={producto.precioUnitario} onChange={cambiosEntrada} />
        </label>
        <label>descuento
        <input type="number" name="descuento"  value={producto.descuento} onChange={cambiosEntrada} />
        </label>
        <label>stock
        <input type="number" name="stock" value={producto.stock} onChange={cambiosEntrada}/>
        </label>
<button type="submit">{productoaModificar ? "Modificar Producto" : "Agregar Producto"}</button> {/*boton dinamico que se modifica si se cambia o se agrega un producto */}

</form>

);
}
export default ProductForm;