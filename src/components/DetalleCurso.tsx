import { useParams } from "react-router";

export const DetalleCurso = () => {
  const { id } = useParams();
  return (
    <>
      <h1>ID: {id}</h1>
      <div className="container">
        <section className="section">
          <span className="badge">nivel</span>
          <h2>titulo</h2>
          <p>descripcion</p>
          <p>
            <strong>Duracion:</strong> duracion horas
          </p>
        </section>
      </div>
    </>
  );
};
