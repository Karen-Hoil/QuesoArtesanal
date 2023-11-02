
import React from "react";
import CardRecetas from "../../components/cardRecetas";
import { useState } from "react";
import './checkList.css';
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

export default function CheckList(){

         
    
        return(
            
            <>
                <Sidebar />
                <Navbar />
                <div className="">
                <h1 className="text"><i class="fa fa-check"></i>CheckList de Quesos</h1>
                
                <form id="todo-list">
                <span class="todo-wrap">
                    <p><CardRecetas></CardRecetas></p>
                    <input type="checkbox" id="1" checked/>
                    <label for="1" class="todo">
                    <i class="fa fa-check"></i>
                    Marinaje
                    </label>
                    <span class="delete-item" title="remove">
                    <i class="fa fa-times-circle"></i>
                    </span>
                </span>
                <span class="todo-wrap">
                    <input type="checkbox" id="2"/>
                    <label for="2" class="todo">
                    <i class="fa fa-check"></i>
                    Calidad
                    </label>
                    <span class="delete-item" title="remove">
                    <i class="fa fa-times-circle"></i>
                    </span>
                </span>
                <span class="todo-wrap">
                    <input type="checkbox" id="3"/>
                    <label for="3" class="todo">
                    <i class="fa fa-check"></i>
                    Tiempo
                    </label>
                    <span class="delete-item" title="remove">
                    <i class="fa fa-times-circle"></i>
                    </span>
                </span>
                    <span class="todo-wrap">
                    <input type="checkbox" id="4"/>
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
        )
}
