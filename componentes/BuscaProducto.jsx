import React, {useMemo,useState} from 'react';

function SearchBar(buscar){
const {TerminosBusqueda,setTerminos} = useState ("");

function cambiosBuscar(dato){
  console.log(dato.target.value)
  setTerminos(dato.target.value);
}

  return (
    <div>
    <div>BuscarProducto</div>
          <input type="text" placeholder="Buscar producto..." onChange={cambiosBuscar} />
      {/* <ul>
        {TerminosBusqueda.map(p => <li key={p.id}>{p.descripcion}</li>)}
      </ul> */}
    </div>
  );

}
export default SearchBar;
