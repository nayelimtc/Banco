import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import HomeBankImage from "../assets/images/HomeBank.jpg";
import HouseImage from "../assets/images/TuCasaPropia.jpg";
import LogoImage from "../assets/images/Logo.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-image">
          <img
            src={LogoImage}
            alt="Imagen descriptiva"
            className="logo-img"
          />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/empresas">Empresas</Link>
            <ul className="dropdown">
              <li>
                <Link to="/opcion1">Opción 1</Link>
              </li>
              <li>
                <Link to="/opcion2">Opción 2</Link>
              </li>
              <li>
                <Link to="/opcion3">Opción 3</Link>
              </li>
              <li>
                <Link to="/opcion4">Opción 4</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/mi-banco">Mi Banco</Link>
            <ul className="dropdown">
              <li>
                <Link to="/opcion1">Opción 1</Link>
              </li>
              <li>
                <Link to="/opcion2">Opción 2</Link>
              </li>
              <li>
                <Link to="/opcion3">Opción 3</Link>
              </li>
              <li>
                <Link to="/opcion4">Opción 4</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/servicio-al-cliente">Servicio al Cliente</Link>
            <ul className="dropdown">
              <li>
                <Link to="/opcion1">Opción 1</Link>
              </li>
              <li>
                <Link to="/opcion2">Opción 2</Link>
              </li>
              <li>
                <Link to="/opcion3">Opción 3</Link>
              </li>
              <li>
                <Link to="/opcion4">Opción 4</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/abre-tu-cuenta">Abre tu Cuenta</Link>
            <ul className="dropdown">
              <li>
                <Link to="/opcion1">Opción 1</Link>
              </li>
              <li>
                <Link to="/opcion2">Opción 2</Link>
              </li>
              <li>
                <Link to="/opcion3">Opción 3</Link>
              </li>
              <li>
                <Link to="/opcion4">Opción 4</Link>
              </li>
            </ul>
          </li>
        </ul>

        <button className="btn-primary-nav">Banca Online</button>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="text-container">
            <h1>Banquito</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="header-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/login")}
              >
                Banca Personas
              </button>
              <button
                className="btn-primary"
                onClick={() => navigate("/loginEmpresa")}
              >
                Banca Empresas
              </button>
            </div>
          </div>
        </div>

        <div className="header-image">
          <img
            src={HomeBankImage}
            alt="Imagen descriptiva"
            className="header-img"
          />
        </div>
      </header>

      {/* Tarjetas */}
      <section className="cards">
        {[
          "Hipotecas",
          "Apertura Cuentas",
          "Tarjetas de crédito",
          "Tipos de Interés",
        ].map((title, index) => (
          <div className="card" key={index}>
            <div className="card-image-placeholder"></div>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="card-btn">Aprender más →</button>
          </div>
        ))}
      </section>

      {/* Sección destacada */}
      <section className="featured">
        <div className="featured-text">
          <h2>Tu casa propia</h2>
          <p>
            Infect itoard baroun, se noth as to que wild y thought a prepon they
            uprolipo lime mant.
          </p>
          <button className="btn-primary">Empecemos</button>
        </div>
        <div className="header-image">
          <img
            src={HouseImage}
            alt="Imagen descriptiva"
            className="header-img"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          {/* Logo */}
          <div className="logo-image">
          <img
            src={LogoImage}
            alt="Imagen descriptiva"
            className="logo-img-foot"
          />
        </div>

          {/* Subtítulos y Links */}
          <div className="footer-column">
            <h4>Contacto y ayuda</h4>
            <a href="#!">Enlace 1</a>
            <a href="#!">Enlace 2</a>
            <a href="#!">Enlace 3</a>
            <a href="#!">Enlace 4</a>
          </div>

          <div className="footer-column">
            <h4>Canales de atención</h4>
            <a href="#!">Enlace 1</a>
            <a href="#!">Enlace 2</a>
            <a href="#!">Enlace 3</a>
            <a href="#!">Enlace 4</a>
          </div>

          <div className="footer-column">
            <h4>Para tu interés</h4>
            <a href="#!">Enlace 1</a>
            <a href="#!">Enlace 2</a>
            <a href="#!">Enlace 3</a>
            <a href="#!">Enlace 4</a>
          </div>
        </div>

        {/* Parte inferior del Footer con iconos sociales como la cuarta columna */}
        <div className="footer-bottom">
          <div className="footer-column">
            {/* Redes sociales */}
            <div className="social-icons">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <div className="icon-placeholder" key={index}></div>
                ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
