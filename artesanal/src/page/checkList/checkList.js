
import React from "react";
import CardRecetas from "../../components/cardRecetas";
import { useState, useEffect } from "react";
import axios from "axios";
import './checkList.css';
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

function CheckList() {
    const id_receta = window.location.href.split("/")[4];
    const [receta, setReceta] = useState({});

    useEffect(() => {
        async function fetchRecetas() {
            try {
                const response = await axios.get(
                    `http://localhost:3001/recetas/${id_receta}`
                );
                setReceta(response.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        }
        fetchRecetas();
    }, [id_receta]);

    return (
        <>
            <div>
                {receta && receta[0] && (
                    <>
                        <Sidebar />
                        <Navbar />
                        <div className="">
                            <h1 className="text"><i class="fa fa-check"></i>CheckList de Quesos</h1>
                            <form id="todo-list">
                                <span class="todo-wrap">

                                    <img src={receta[0].img_queso}></img>
                                    <p className="text-center text-2xl">{receta[0].nombre_receta}</p>
                                    <input type="checkbox" id="1" checked />
                                    <label for="1" class="todo">
                                        <i class="fa fa-check"></i>
                                        Marinaje
                                    </label>
                                    <span class="delete-item" title="remove">
                                        <i class="fa fa-times-circle"></i>
                                    </span>
                                </span>
                                <span class="todo-wrap">
                                    <input type="checkbox" id="2" />
                                    <label for="2" class="todo">
                                        <i class="fa fa-check"></i>
                                        Calidad
                                    </label>
                                    <span class="delete-item" title="remove">
                                        <i class="fa fa-times-circle"></i>
                                    </span>
                                </span>
                                <span class="todo-wrap">
                                    <input type="checkbox" id="3" />
                                    <label for="3" class="todo">
                                        <i class="fa fa-check"></i>
                                        Tiempo
                                    </label>
                                    <span class="delete-item" title="remove">
                                        <i class="fa fa-times-circle"></i>
                                    </span>
                                </span>
                                <span class="todo-wrap">
                                    <input type="checkbox" id="4" />
                                    <label for="4" class="todo">
                                        <i class="fa fa-check"></i>
                                        Tamaño
                                    </label>
                                    <span class="delete-item" title="remove">
                                        <i class="fa fa-times-circle"></i>
                                    </span>
                                </span>
                            </form>

                        </div>
                    </>

                )}
            </div>





        </>

    )
}

export default CheckList