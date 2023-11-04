import React from "react";
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import FormularioProduccionQueso from '../components/Formulario' // Importando el formulario

function Produccion() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="absolute left-[20%] w-[80%] p-4"> {/* Ajuste en el ancho y padding */}
        <h2 className="m-2">Producción de Queso</h2>
        {/* Aquí utilizamos el FormularioProduccionQueso */}
        <FormularioProduccionQueso />
      </div>
    </>
  );
}

export default Produccion;
