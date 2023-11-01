import React from "react";
import quesito from '../img/quesito.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="border w-screen md:h-30 h-20 top-20">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <ul>
              <li className="flex absolute left-[20%] top-2">
                <img className='w-20' src={quesito} alt="Logo" />
                <p className="p-2 text-3xl">Queso artesanal</p>
              </li>
            </ul>
          </div>
          <ul className="hidden md:flex pr-20  font-bold space-x-4">
            <li className="flex items-center">
              <Link to={'/'} style={{color:'black', textDecoration:'none', marginTop:'25px',}}>Cerrar sesión <box-icon name='log-out' classname="ml-5" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
