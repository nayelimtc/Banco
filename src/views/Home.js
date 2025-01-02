import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li>
            <Link to="/empresas">Empresas</Link>
          </li>
          <li>
            <Link to="/mi-banco">Mi Banco</Link>
          </li>
          <li>
            <Link to="/servicio-al-cliente">Servicio al Cliente</Link>
          </li>
          <li>
            <Link to="/abre-tu-cuenta">Abre tu Cuenta</Link>
          </li>
        </ul>

        <button className="btn-primary">Banca Online</button>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>Banquito</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="header-buttons">
            <button className="btn-primary" onClick={() => navigate("/login")}>Banca Personas</button>
            <button className="btn-primary" onClick={() => navigate("/loginEmpresa")}>Banca Empresas</button>
          </div>
        </div>
        <div className="header-image">
          <div className="image-placeholder"></div>
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
        <div className="featured-image">
          <div className="image-placeholder"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="logo">Logo</div>
          {["Subtitle", "Subtitle", "Subtitle", "Subtitle"].map(
            (subtitle, index) => (
              <div className="footer-column" key={index}>
                <h4>{subtitle}</h4>
                <a href="#!">Link text</a>
                <a href="#!">Link text</a>
                <a href="#!">Link text</a>
              </div>
            )
          )}
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div className="icon-placeholder" key={index}></div>
              ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
