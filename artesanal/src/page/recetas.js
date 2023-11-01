import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import CardRecetas from "../components/cardRecetas";

function Recetas() {
  return (
    <>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <h2>Recetas</h2>
      <div className="ml-1/6 grid grid-cols-2 gap-4">
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
      </div>
    </>
  );
}

export default Recetas;
