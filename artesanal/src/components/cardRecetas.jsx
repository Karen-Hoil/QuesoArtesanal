import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

function CardRecetas(imagen, nombre, id) {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={imagen} thumbnail />
            </Col>
          </Row>
        </Container>
        <h6>
          Example heading <Badge bg="secondary">{nombre}</Badge>
        </h6>
      </div>
    </>
  );
}

export default CardRecetas;
