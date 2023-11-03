// import React from "react";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Queso from "../img/queso.jpg";

// function CardRecetas({ imagen, nombre, id }) {
//   return (
//     <Col xs={6} md={4}>
//       <Image src={Queso} thumbnail />
//       <h6>
//         <Badge bg="secondary">Asadera chica</Badge>
//       </h6>
//     </Col>
//   );
// }

// export default CardRecetas;

import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardRecetas({ imagen, nombre, id }) {
  return (
    <Link to='/recetaInfo'>
    <Card className="w-60 h-60">
      <Card.Img variant="top" src={Queso} />
      <Card.Body>
        <Card.Title><Badge bg="secondary">Asadera chica</Badge></Card.Title>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default CardRecetas;