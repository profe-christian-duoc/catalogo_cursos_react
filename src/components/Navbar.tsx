import { Link } from "react-router";

export const Navbar = () => {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true"></span>Aula Digital
        </Link>
        <nav aria-label="Principal">
          <ul className="nav-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/catalogo">Catálogo</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
            <li>
              <Link to="/login">Ingresar</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
