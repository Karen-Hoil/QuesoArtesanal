import React from 'react'

function Sidebar() {
  return (
    <>
      <div class="sidebar">
        <h2 style={{ paddingLeft: '20px' }} className="font-bold text-3xl p-3">Gustavo</h2>
        <ul>
          <li><a href="/#" className="p-2">Producción de queso</a></li>
          <li><a href="/#" className="p-2">Recetas</a></li>
          <li><a href="/#" className="p-2">Estadisticas</a></li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar