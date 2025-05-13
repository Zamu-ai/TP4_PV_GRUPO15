import React, {useMemo,useState} from 'react';

function SearchBar(bucar){
const {TerminosBusueda,setTerminos} = useState ("");
function cambiosBuscar(dato){
setTerminos(dato.target.value);
}
  return (
    <div>
    <div>BuscarProducto</div>
          <input type="text" placeholder="Buscar producto..." onChange={handleChange} />
      <ul>
        {productosFiltrados.map(p => <li key={p.id}>{p.descripcion}</li>)}
      </ul>
    </div>
  );

}
export default SearchBar;
