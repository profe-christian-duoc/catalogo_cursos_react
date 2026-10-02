import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Nosotros } from "../components/Nosotros";
import { Presentacion } from "../components/Presentacion";

export const Inicio = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentacion />
      <Nosotros />
      <Contacto />
      <Footer />
    </>
  );
};
