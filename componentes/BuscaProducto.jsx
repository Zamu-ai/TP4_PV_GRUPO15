import React, { useState, useMemo } from "react";

function BuscaProducto({ productos }) {
  const [TerminosBusqueda, setTerminos] = useState("");

  function cambiosBuscar(event) {
    setTerminos(event.target.value);
  }

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) =>
      p.id.toString().includes(TerminosBusqueda) ||
      p.nombreProd.toLowerCase().includes(TerminosBusqueda.toLowerCase()) ||
      p.marca.toLowerCase().includes(TerminosBusqueda.toLowerCase())
    );
  }, [TerminosBusqueda, productos]);

  return (
    <div>
      <input 
        type="text"
        className="btn-buscar"
        placeholder="Ingrese Nombre, ID o Marca" 
        onChange={cambiosBuscar} 
        value={TerminosBusqueda} 
      />

    {/* Mostrar los resultados solo cuando hay algo escrito */}
    {TerminosBusqueda && (
      <div>
        {productosFiltrados.length > 0 ? (
          <ul>
            {productosFiltrados.map((p) => (
              <li key={p.id}>{p.id} - {p.nombreProd} - {p.marca}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron productos con ese criterio.</p>
        )}
      </div>
    )}

    </div>
  );
}

export default BuscaProducto;
