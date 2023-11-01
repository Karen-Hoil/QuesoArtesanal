import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import Queso from "../img/queso.jpg";

function CardRecetas(imagen, nombre, id) {
  return (
    <>
      <div className="">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={Queso} thumbnail />
              <h6>
                <Badge bg="secondary">Asadera chica</Badge>
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CardRecetas;
