import React from 'react'

function Navbar() {
    return (
        <>
            <div className="border w-screen md:h-16 h-20 top-0">
                <div className="px-2 flex justify-between items-center w-full h-full">
                    <div className="flex items-center">
                        <ul>
                            <li>
                                <a>eorihfoierhgewfweffwfwwfwfwfie-</a>
                                <a className="p-2 text-3xl">Queso artesanal</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="hidden md:flex pr-4 font-bold space-x-4">

                        <li>
                            <a>Cerrar sesion</a>
                        </li>

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
