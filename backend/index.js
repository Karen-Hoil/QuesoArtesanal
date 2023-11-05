//dependencias
const express = require("express");
const cors = require("cors");

const usuarioRouter = require('./router/ususarioRouter');
const recetasRouter = require('./router/RecetasRouter');

const app = express();
app.use(cors());
app.use(express.json());

//Ruta al router
app.use('/usuarios', usuarioRouter);
app.use('/recetas', recetasRouter);

app.listen(3001, () =>{
    console.log("API escuchando por el puerto 3001");
});
