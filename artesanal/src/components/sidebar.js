import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 bg-yellow-400 fixed top-0 left-0 h-screen">
      <h2 className="font-bold text-3xl pt-3 px-4 pb-6">Gustavo</h2>
      <ul className="bg-yellow-500 p-3">
        <li className="flex md:flex-col lg:flex-row mb-10">
          <box-icon name='graphql' type='logo' className="mr-1 md:mr-0 lg:mr-1"></box-icon>
          <p className="text-black">Producción de queso</p>
        </li>
        <Link to='/recetas' className="text-black">
          <li className="flex md:flex-col lg:flex-row mb-10">
            <box-icon name='receipt' className="mr-1 md:mr-0 lg:mr-1"></box-icon>
            <p className="text-black">Recetas</p>
          </li>
        </Link>
        <Link to='/comparacion' className="text-black">
        <li className="flex md:flex-col lg:flex-row">
          <box-icon name='stats' className="mr-1 md:mr-0 lg:mr-1"></box-icon>
          <p className="text-black">Estadísticas</p>
        </li>
        </Link>
          <br></br>
          <br></br>
        <Link to='/checkList' className="text-black">
          <li className="flex md:flex-col lg:flex-row mb-10">
          <box-icon name='check-square'></box-icon>
            <p className="text-black">Check List</p>
          </li>
        </Link>
        
      </ul>
    </div>

  );
}

export default Sidebar;
