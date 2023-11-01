import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import RecetaInfo from '../page/RecetaInfo'

function Sidebar() {
  return (
    <>
      <div className="sidebar md:w-1/4 lg:w-1/5 xl:w-1/6 bg-yellow-400 fixed top-0 left-0">
        <h2 className="font-bold text-3xl pt-3 px-4 pb-6">Gustavo</h2>
        <ul className="bg-yellow-500">
          <li>
            <Link to ={"/produccionQueso"} className="text-black">Producción de queso</Link>
          </li>
          <li>
            <Link to={"/RecetaInfo"} className="text-black">Recetas</Link>
          </li>
          <li>
            <Link to={"/Estadisticas"} className="text-black">Estadísticas</Link>
          </li>
          <li>
            <Link to={"/CheckList"} className='text-black'>CheckList</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </>
    
  );
}

export default Sidebar;
