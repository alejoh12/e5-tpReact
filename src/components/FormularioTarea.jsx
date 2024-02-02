import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // guardar en la lista - (spread)
    setLista([... lista, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombre) => {
    const arregloFiltrado = lista.filter((tarea)=> tarea !== nombre);//borra
    setLista(arregloFiltrado);//actualiza state
  }

  return (
    <section className="my-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formTareas">
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="dark" className="ms-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas lista={lista} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
