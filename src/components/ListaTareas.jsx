import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ lista, borrarTarea }) => {
  return (
    <ListGroup>
      {lista.map((item, indice) => (
        <ItemTarea key={indice} tarea={item} borrarTarea={borrarTarea}></ItemTarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
