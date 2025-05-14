 
function ProductList({lista,seleccionarProducto}){
    return(
        <div>
            {lista.length === 0 ? (          //condicion de lista vacia 
                <p>No hay productos disponibles.</p>
            ) : (                           //condicion de lista con elementos
                 
                   lista.map((p) => (
               <div className="lista"
                  key={p.id}
                  onClick={() => seleccionarProducto(p)}  // Llama a seleccionarProducto al hacer clic
                 // AGREGAR AL CSS al pasar el cursor lo sombrea style={{ cursor: 'pointer', marginBottom: '10px', padding: '5px', border: '1px solid #ccc' }}
               >
                  {/* Solo muestra el nombre del producto */}
                  <h3>{p.nombreProd}</h3>
               </div>
            )) 
                 
            )}
        </div>
    );
}
export default ProductList;
