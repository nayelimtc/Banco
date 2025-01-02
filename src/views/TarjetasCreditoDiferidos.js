import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/TarjetaCredito.css";

const TarjetasCreditoDiferidos = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Datos estáticos de los diferidos por número de tarjeta
  const diferidos = {
    "2033300****": [
      {
        tienda: "Tienda XYZ",
        fecha: "10-20-2024",
        montoTotal: "$500.00",
        cuotasRestantes: "5 de 12",
      },
      {
        tienda: "Supermercado ABC",
        fecha: "09-15-2024",
        montoTotal: "$300.00",
        cuotasRestantes: "3 de 6",
      },
    ],
    "4123000****": [
      {
        tienda: "Electrodomésticos 123",
        fecha: "08-10-2024",
        montoTotal: "$600.00",
        cuotasRestantes: "4 de 10",
      },
      {
        tienda: "Librería El Saber",
        fecha: "07-05-2024",
        montoTotal: "$200.00",
        cuotasRestantes: "2 de 4",
      },
      {
        tienda: "Zapatería XYZ",
        fecha: "06-20-2024",
        montoTotal: "$150.00",
        cuotasRestantes: "1 de 3",
      },
    ],
    "1234567****": [
      {
        tienda: "Restaurante Delicias",
        fecha: "11-10-2024",
        montoTotal: "$450.00",
        cuotasRestantes: "6 de 12",
      },
    ],
  };

  // Obtener el número de tarjeta desde la URL o estado
  const numeroTarjetaSeleccionada = location.state?.numeroTarjeta || "2033300****"; // Por defecto, Mastercard

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="profile-image"
        />
        <h2>Juanito Estupiñan</h2>
        <p>Último ingreso: 11-15-2024 10:03:44</p>
        <button onClick={() => navigate("/cuentas")}>Cuentas</button>
        <button onClick={() => navigate("/tarjetas-credito/principal")}>
          Tarjetas de Crédito
        </button>
        <hr className="sidebar-divider" />
        <button className="logout-button" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Diferidos de la tarjeta {numeroTarjetaSeleccionada}</h1>
          <div className="user-info">
            <p>
              <strong>Juanito Estupiñan</strong> Último ingreso: 11-15-2024
              10:03:44
            </p>
          </div>
        </div>

        {/* Diferidos Section */}
        <div className="diferidos-section">
          <div className="card-container">
            {diferidos[numeroTarjetaSeleccionada]?.map((diferido, index) => (
              <div key={index} className="diferidos-card">
                <div className="diferidos-details">
                  <h4>{diferido.tienda}</h4>
                  <p>Fecha: {diferido.fecha}</p>
                  <p>
                    Monto Total: <strong>{diferido.montoTotal}</strong>
                  </p>
                  <p>
                    Cuotas Restantes: <strong>{diferido.cuotasRestantes}</strong>
                  </p>
                </div>
                <div className="diferidos-actions">
                  <button
                    className="action-button"
                    onClick={() => alert("Solicitar nuevo diferido")}
                  >
                    Solicitar Nuevo Diferido
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetasCreditoDiferidos;
