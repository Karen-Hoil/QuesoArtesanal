const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "queso",
});

connection.connect((error)=>{
    if(error){
        console.log("Error al conectar la base de datos", error);
    } else{
        console.log("Conección exitosa a la base de datos");
    }
});

module.exports = connection;