import React from "react";
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import CardRecetas from '../components/cardRecetas'

function Recetas() {
  return (
    <>
      <Sidebar />
        <Navbar />
      <div className="absolute left-[20%] ">
        <h2 className="m-2">Recetas</h2>
        <div className="grid grid-cols-3 gap-4">
            <CardRecetas />
            <CardRecetas />
            <CardRecetas />
            <CardRecetas />
            <CardRecetas />
            <CardRecetas />
        </div>
      </div>
    </>
  );
}

export default Recetas;
