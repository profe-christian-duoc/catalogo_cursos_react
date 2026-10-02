import { cursos } from "../data/cursos";
import { CursoCard } from "./CursoCard";

export const CursosContainer = () => {
  return (
    <section className="section">
      <div className="container">
        <section className="cards" id="data-catalogo" aria-label="Cursos">
          {cursos.map((curso) => (
            <CursoCard
              key={curso.id}
              id={curso.id}
              titulo={curso.titulo}
              descripcion={curso.descripcion}
              duracion={curso.duracion}
              nivel={curso.nivel}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
