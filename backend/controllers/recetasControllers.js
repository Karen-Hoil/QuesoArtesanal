const connection = require('../database');

function obtenerRecetas(request, response) {
    connection.query('SELECT * FROM recetas', (error, results) => {
        if (error) {
            console.error("Error al obtener los datos:", error);
            response.status(500).json({ error: "Error" });
        } else {
            response.status(200).json(results);
        }
    });
}

function verRecetasPorUsuario(request, response) {
    const receta = request.params.id_receta;
    connection.query(
      `SELECT * FROM recetas WHERE id_receta = ?;`,
      [receta],
      (error, results) => {
        if (error) {
            console.error("Error al obtener los datos:", error);
            response.status(500).json({ error: "Error" });
        } else {
            response.status(200).json(results);
        }
      }
    );
  }

module.exports = {
    obtenerRecetas,
    verRecetasPorUsuario,
};