import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const DatosQueso = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["Leche", "Jugo", "Jugo de limón", "Vinagre", "Sal"],
      datasets: [
        {
          label: "Queso Tipo A",
          data: [12, 19, 3, 5, 2],
          backgroundColor: "rgba(232, 0, 0, 0.2)", // Color E80000
          borderColor: "rgba(232, 0, 0, 1)", // Color E80000
          borderWidth: 1,
        },
        {
          label: "Queso Tipo B",
          data: [10, 15, 5, 8, 3],
          backgroundColor: "rgba(239, 124, 18, 0.2)", // Color EF7C12
          borderColor: "rgba(239, 124, 18, 1)", // Color EF7C12
          borderWidth: 1,
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: "bar",
        data: data,
        options: {
          indexAxis: "x", // Cambio a eje X para visualización vertical
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container">
        <div className="row mt-10 justify-content-center">
          <div className="col-6 text-center">
            {/* AJUSTES PARA LA GRAFICA DE BARRAS */}
            <div style={{ height: "80px", margin: "auto" }}></div>
            <canvas
              ref={chartContainer}
              style={{ width: "500px", height: "250px", marginTop: "5px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosQueso;
