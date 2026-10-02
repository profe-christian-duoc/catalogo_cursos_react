import { Link } from "react-router";
import type { Curso } from "../types/Curso";

export const CursoCard = (props: Curso) => {
  return (
    <>
      <article className="card">
        <span className="badge">{props.nivel}</span>
        <h2>{props.titulo}</h2>
        <p>{props.descripcion}</p>
        <p>
          <strong>Duración:</strong>
          {props.duracion} horas
        </p>
        <Link to={`/catalogo/${props.id}`} className="btn btn-primary">
          Ver curso
        </Link>
      </article>
    </>
  );
};
