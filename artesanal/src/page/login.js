import React, { useState } from "react";
import quesito from '../img/quesito.png'
import { Link} from "react-router-dom"
import Axios from "axios";

function Login(){
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const Login = async() =>{
    const response = await Axios.post('http://localhost:3001/login',{
      usuario: usuario,
      contraseña: contraseña
    })
    if (response.data.status){
      window.location.href= "/home"
    }else{
      console.log("usuario o contraseña erroneas")
    }
  }
    return(
        <div className="login_queso">
        <div className="login_img" style={{maxWidth:'100%'}}>
          <img
            className="pulsate-bck imagen_queso"
            src="https://img.freepik.com/foto-gratis/alto-angulo-delicioso-buffet-queso-sobre-tabla-madera_23-2148432625.jpg?w=360&t=st=1698724952~exp=1698725552~hmac=71bee12e60eb0917f8dbe34011274504770d78b04d2a8444235496b0457e7fe5"
            alt=""
            style={{maxWidth:'100%', height:'auto'}}
          />
        </div>
        <div className="login_contenido">
          <div className="login_titulo">
            <img src={quesito} alt="Logo" /> 
            <h1>Queso Artesanal</h1>
          </div>
          <div className="login_formulario">
            <h1>Inicio de sesión</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingrese usuario"
                  onChange={(event)=>{
                    setUsuario(event.target.value)
                  }}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingrese contraseña"
                  onChange={(event)=>{
                    setContraseña(event.target.value)
                  }}
                />
                
                <button type="button" onClick={Login}>Iniciar sesión</button>
                
                <p>¿No tienes cuenta? <Link to={'/registro'}>Registrate</Link></p>
              </div>
            </form>
          </div>
        </div>
        
      </div>
      
      
    )
}
export default Login