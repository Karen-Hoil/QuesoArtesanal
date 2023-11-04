const connection = require("../database");

//obtener usuarios por id
const obtenerAdmin = (req, res) =>{
    const id = req.params.id_admin;

    connection.query('SELECT * FROM administradores WHERE id_admin = ?', [id], (error, results) =>{
        if(error){
            console.error("Error al obtener al usuario", error);
            res.status(500),json({error: "Ocurrio un error al obtener al usuario"});
        }else if (results === 0){
            res.status(500).json({error: "El usuario no fue encontrado"});
        }else{
            res.json(results[0]);
        }
    });
}

//agregar usuarios
const crearAdmin = (req, res) =>{
    const {usuario, contraseña} = req.body;
    connection.query('INSERT INTO administradores (usuario, contraseña) VALUES (?, ?)', [usuario, contraseña], (error, results) =>{
        if(error){
            console.error("Error al agregar usuario", error);
            res.status(500).json({error: "Error al agregar usuario"});
        }else{
            res.json({message: "Usuario agregado"});
        }
    });
}

module.exports = {
    obtenerAdmin,
    crearAdmin
}