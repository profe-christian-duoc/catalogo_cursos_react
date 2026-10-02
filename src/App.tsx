import { Route, Routes } from "react-router";
import { Inicio } from "./pages/Inicio";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { Catalogo } from "./pages/Catalogo";
import { DetalleCurso } from "./components/DetalleCurso";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:id" element={<DetalleCurso />} />
      </Routes>
    </>
  );
};

export default App;
