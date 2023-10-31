import React from "react";
import quesito from '../img/quesito.png';

function Navbar() {
  return (
    <>
      <div className="border w-screen md:h-16 h-20 top-0">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <ul>
              <li className="flex items-center">
                <img className='w-20' src={quesito} alt="Logo" />
                <a className="p-2 text-3xl">Queso artesanal</a>
              </li>
            </ul>
          </div>
          <ul className="hidden md:flex pr-4 font-bold space-x-4">
            <li className="flex items-center">
              <a>Cerrar sesión <box-icon name='log-out' class="ml-2"></box-icon></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
