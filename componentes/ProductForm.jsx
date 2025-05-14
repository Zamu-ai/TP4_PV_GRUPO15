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
            precioUnitario:undefined,
            descuento:undefined,
            stock:undefined,
            
        });
        
    }
return(
    <form className="formulario" onSubmit={ProductoBase}>
     
        <label >Nombre del producto
         <input type="text" name="nombreProd" placeholder="nombre de producto" value={producto.nombreProd} onChange={cambiosEntrada} required autoComplete="off"/>
        </label>
        <label>Descripcion del producto
            <input type="text" name="descripcion" placeholder="descripcion" value={producto.descripcion} onChange={cambiosEntrada} required autoComplete="off"/>
        </label>
        <label>Precio
            <input type="number" name="precioUnitario" min="0" placeholder="Ingrese precio" value={producto.precioUnitario || ""} onChange={cambiosEntrada} required/>
        </label>
        <label>Descuento
        <input type="number" name="descuento" min="0" placeholder="Ingrese descuento" value={producto.descuento || ""} onChange={cambiosEntrada} required/>
        </label>
        <label>Stock
        <input type="number" name="stock" min="0" placeholder="Ingrese stock" value={producto.stock || ""} onChange={cambiosEntrada} required/>
        </label>
        <button type="submit" className="btn-agregar">{productoaModificar ? "Modificar Producto" : "Agregar Producto"}</button> {/*boton dinamico que se modifica si se cambia o se agrega un producto */}
    </form>

);
}
export default ProductForm;