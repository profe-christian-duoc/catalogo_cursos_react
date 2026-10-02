export const RegistroForm = () => {
  return (
    <main className="auth-page">
      <div className="container">
        <section className="auth-box card">
          <span className="section-kicker">Comienza hoy</span>
          <h1>Crear cuenta</h1>
          <p className="muted">
            Regístrate para acceder a la experiencia demostrativa de Aula
            Digital.
          </p>
          <form className="form-grid" id="data-register">
            <label className="field"
              >Nombre<input
                name="nombre"
                required
                placeholder="Tu nombre" /></label
            ><label className="field"
              >Correo<input
                type="email"
                name="email"
                required
                placeholder="nombre@correo.cl" /></label
            ><label className="field"
              >Contraseña<input
                type="password"
                name="password"
                minLength={4}
                required
                placeholder="Mínimo 4 caracteres" /></label
            ><button className="btn btn-primary" type="submit">
              Crear mi cuenta
            </button>
            <p className="message" id="data-message" hidden></p>
          </form>
        </section>
      </div>
    </main>
  )
}
