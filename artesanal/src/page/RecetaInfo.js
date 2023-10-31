import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Queso from '../img/queso.jpg'

function RecetaInfo() {
    return (
        <>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <h1 className="text-3xl p-2 top-[10%] left-[30%] absolute">Receta</h1>
            <div className='p-2 top-[17%] left-[30%] absolute'>
                <img src={Queso} className="w-[30%]"></img>
            </div>
            <div className="top-[17%] left-[53%] absolute">
                <h1 className="text-2xl">Asadera Chica</h1>
                <p className="p-2">Ingredientes:</p>
                <p>Leche(temp: 32C)</p>
                <p>Jugo de limon(6 PH|)</p>
                <p>Vinagre (6PH)</p>
                <p>Sal (300g)</p>
            </div>
            <div>
                <h1  className="text-2xl top-[55%] left-[30%] absolute">Procesos</h1>
                <ui className="p-2 top-[60%] left-[30%] absolute" >
                    <li>Vierte la leche en una olla grande y caliéntala a fuego medio-alto hasta que esté a punto de hervir, removiendo ocasionalmente para evitar que se queme.</li>
                    <li>Una vez que la leche esté caliente, agrega lentamente el vinagre blanco o el jugo de limón, revolviendo suavemente hasta que veas que la leche comienza a cuajarse y se separa el suero (líquido amarillento).</li>
                    <li>Apaga el fuego y deja reposar la mezcla durante 10-15 minutos para que la cuajada se separe completamente del suero.</li>
                    <li>Coloca un colador grande forrado con un paño de muselina (o una gasa fina) sobre un recipiente para recoger el suero. Vierte cuidadosamente la mezcla de leche y cuajada en el colador para separar el suero del queso.</li>
                    <li>Deja escurrir la cuajada durante unos 15-20 minutos para eliminar la mayor cantidad de suero posible.</li>
                    <li>Luego, junta los extremos del paño y exprime suavemente para eliminar el exceso de suero restante.</li>
                    <li>Coloca la cuajada exprimida en un recipiente y agrega sal al gusto. Mezcla bien para distribuir uniformemente la sal en el queso.</li>
                    <li>Si prefieres un queso más firme, puedes presionar la cuajada en un molde con peso durante varias horas en el refrigerador.</li>
                </ui>
            </div>
        </>
    )
}

export default RecetaInfo
