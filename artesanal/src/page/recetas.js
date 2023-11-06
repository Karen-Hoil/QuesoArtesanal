import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import CardRecetas from '../components/cardRecetas'

function Recetas() {

  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    async function fetchRecetas() {
      try {
        const response = await axios.get(
          `http://localhost:3001/recetas`
        );
        setRecetas(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }
    fetchRecetas();
  }, []);

  return (
    <>
      <Sidebar />
        <Navbar />
      <div className="absolute left-[20%] ">
        <h2 className="m-2">Recetas</h2>
        <div className="grid grid-cols-3 gap-4">
            {recetas.map((receta) =>(
              <CardRecetas
              id={receta.id_receta}
              imagen={receta.img_queso}
              nombre={receta.nombre_receta}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Recetas;
