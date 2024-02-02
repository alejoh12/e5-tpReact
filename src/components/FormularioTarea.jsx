import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage = JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [lista, setLista] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tareasKey",JSON.stringify(lista));
  },[lista]) //descarta actualizaciones, solo usa montaje

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
