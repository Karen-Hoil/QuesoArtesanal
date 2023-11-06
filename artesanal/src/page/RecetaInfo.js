import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function RecetaInfo() {
  const id_receta = window.location.href.split("/")[4];
  const [receta, setReceta] = useState({});

  useEffect(() => {
    async function fetchRecetas() {
      try {
        const response = await axios.get(
          `http://localhost:3001/recetas/${id_receta}`
        );
        setReceta(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchRecetas();
  }, [id_receta]);

  return (
    <>
      <div>
        {receta && receta[0] && (
          <>
            <Sidebar />
            <Navbar />
            <h1 className="text-3xl p-2 top-[15%] left-[29%] absolute">Receta</h1>
            <div className="p-2 top-[25%] left-[29%] absolute">
              <img src={receta[0].img_queso} alt="queso" className="w-[30%]" />
            </div>
            <div className="top-[25%] left-[53%] absolute">
              <h1 className="text-2xl">{receta[0].nombre_receta}</h1>
              <p className="text-xl">Ingredientes:</p>
              <p>{receta[0].ingrediente1}</p>
              <p>{receta[0].ingrediente2}</p>
              <p>{receta[0].ingrediente3}</p>
              <p>{receta[0].ingrediente4}</p>
            </div>
            <div>
              <h1 className="text-2xl top-[70%] left-[29%] absolute">Procesos</h1>
              <ul className="p-2 top-[75%] left-[29%] absolute">
                <li>{receta[0].proceso}</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RecetaInfo;
