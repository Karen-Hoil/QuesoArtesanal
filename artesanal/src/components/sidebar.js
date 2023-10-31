import React from 'react';

function Sidebar() {
  return (
    <>
      <div className="sidebar md:w-1/4 lg:w-1/5 xl:w-1/6 bg-yellow-400 fixed top-0 left-0">
        <h2 className="font-bold text-3xl pt-3 px-4 pb-6">Gustavo</h2>
        <ul className="bg-yellow-500">
          <li>
            <a href="/#" className="text-black">Producción de queso</a>
          </li>
          <li>
            <a href="/#" className="text-black">Recetas</a>
          </li>
          <li>
            <a href="/#" className="text-black">Estadísticas</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
