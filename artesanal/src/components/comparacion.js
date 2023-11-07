import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const DatosQueso = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [datos, setDatos] = useState({
    labels: ["Leche (ml)", "Jugo (ml)", "Jugo de limón(ml)", "Vinagre (ml)", "Sal (g)"],
    quesos: {
      "Queso Manchego": [12, 19, 3, 5, 2],
      "Queso Sopero": [10, 15, 5, 8, 3],
    }
  });

  const cambiarDatos = (nuevaData) => {
    setDatos({
      ...datos,
      quesos: nuevaData
    });
  };

  useEffect(() => {
    const data = {
      labels: datos.labels,
      datasets: [
        {
          label: "Queso Manchego",
          data: datos.quesos["Queso Manchego"],
          backgroundColor: "rgba(232, 0, 0, 0.2)",
          borderColor: "rgba(232, 0, 0, 1)",
          borderWidth: 1,
        },
        {
          label: "Queso Sopero",
          data: datos.quesos["Queso Sopero"],
          backgroundColor: "rgba(239, 124, 18, 0.2)",
          borderColor: "rgba(239, 124, 18, 1)",
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
          indexAxis: "x",
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value, index, values) {
                  return value;
                },
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y + (context.datasetIndex === 1 ? " ml" : " ml");
                  }
                  return label;
                }
              }
            }
          }
        },
      });
    }
  }, [datos]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container">
        <div className="row mt-10 justify-content-center">
          <div className="col-6 text-center">
            <div style={{ height: "80px", margin: "auto" }}></div>
            <canvas
              ref={chartContainer}
              style={{ width: "500px", height: "250px", marginTop: "5px" }}
            />


            <button className="btn btn-warning text-dark" onClick={() => cambiarDatos({
              "Queso Manchego": [15, 18, 4, 7, 3],
              "Queso Sopero": [11, 17, 6, 9, 4]
            })}>Semana Pasada</button>

        
            <button className="btn btn-warning text-dark m-2" onClick={() => cambiarDatos({
              "Queso Manchego": [10, 15, 3, 6, 2],
              "Queso Sopero": [8, 14, 4, 7, 3]
            })}>Hace 1 Mes</button>


            <button className="btn btn-warning text-dark" onClick={() => cambiarDatos({
              "Queso Manchego": [14, 21, 4, 8, 3],
              "Queso Sopero": [9, 16, 5, 7, 4]
            })}>Hace 2 Semanas</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosQueso;
