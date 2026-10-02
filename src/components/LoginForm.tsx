export const LoginForm = () => {
  return (
     <main className="auth-page">
      <div className="container">
        <section className="auth-box card">
          <span className="section-kicker">Bienvenido/a</span>
          <h1>Iniciar sesión</h1>
          <p className="muted">Ingresa tus datos para continuar aprendiendo.</p>
          <form className="form-grid" id="data-login">
            <label className="field"
              >Correo<input
                type="email"
                name="email"
                required
                placeholder="nombre@correo.cl" /></label
            ><label className="field"
              >Contraseña<input
                type="password"
                name="password"
                required
                placeholder="Tu contraseña" /></label
            ><button className="btn btn-primary" type="submit">Ingresar</button>
            <p className="message" id="data-message" hidden></p>
          </form>
        </section>
      </div>
    </main>
  )
}
