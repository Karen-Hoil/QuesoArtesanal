import Badge from "react-bootstrap/Badge";
// import Queso from "../img/queso.jpg";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardRecetas({ imagen, nombre, id }) {
  return (
    <Link to={`/recetaInfo/${id}`}>
    <Card className="w-60 h-60">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title><Badge bg="secondary">{nombre}</Badge></Card.Title>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default CardRecetas;
