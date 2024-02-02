import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import FormularioTarea from "./components/FormularioTarea";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Container className="my-4">
      <h1 className="text-center text-light display-2">Bienvenido</h1>
      <h2 className="text-center text-light">Ingresa tus tareas</h2>
      <FormularioTarea></FormularioTarea>
    </Container>
    <Footer></Footer>
    </>
  );
}

export default App;
