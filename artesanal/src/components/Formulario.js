import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../css/ProduccionQueso.css';

function FormularioProduccionQueso() {
  const [formValues, setFormValues] = useState({
    tipoQueso: '',
    cantidadLeche: '',
    temperaturaLeche: '',
    tiempoCalentarLeche: '',
    cantidadJugoLimon: '',
    temperaturaJugoLimon: '',
    tiempoCalentarJugoLimon: '',
    tiempoReposar: '',
    tiempoColarSuero: '',
    cantidadCuajada: '',
    cantidadSal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesar los valores del formulario aquí
    console.log(formValues);
  };

  return (
    <div className="formulario-produccion-queso">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tipo de queso</Form.Label>
          <Form.Control
            type="text"
            name="tipoQueso"
            value={formValues.tipoQueso}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Sección de Leche */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Leche</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cantidad"
              name="cantidadLeche"
              value={formValues.cantidadLeche}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="number"
              placeholder="Temperatura"
              name="temperaturaLeche"
              value={formValues.temperaturaLeche}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="number"
              placeholder="Tiempo de calentar"
              name="tiempoCalentarLeche"
              value={formValues.tiempoCalentarLeche}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Sección de Jugo de limón */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Jugo de limón</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cantidad"
              name="cantidadJugoLimon"
              value={formValues.cantidadJugoLimon}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="number"
              placeholder="Temperatura"
              name="temperaturaJugoLimon"
              value={formValues.temperaturaJugoLimon}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="number"
              placeholder="Tiempo de calentar"
              name="tiempoCalentarJugoLimon"
              value={formValues.tiempoCalentarJugoLimon}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Sección de Reposar */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Reposar</Form.Label>
            <Form.Control
              type="number"
              placeholder="Tiempo"
              name="tiempoReposar"
              value={formValues.tiempoReposar}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Sección de Colar suero del queso */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Colar suero del queso</Form.Label>
            <Form.Control
              type="number"
              placeholder="Tiempo"
              name="tiempoColarSuero"
              value={formValues.tiempoColarSuero}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Sección de Cuajada */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Cuajada</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cantidad"
              name="cantidadCuajada"
              value={formValues.cantidadCuajada}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* Sección de Sal */}
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Sal</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cantidad"
              name="cantidadSal"
              value={formValues.cantidadSal}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default FormularioProduccionQueso;
