import React from "react";
import ImgTI from "../imagenes/capacitaciones/imgTInformacion.png";
import ImgHB from "../imagenes/capacitaciones/imgHblandas.png";
import ImgVM from "../imagenes/capacitaciones/imgVM.png";
import ImgDP from "../imagenes/capacitaciones/imgDP.png";
import ImgIdiomas from "../imagenes/capacitaciones/imgidiomas.png"
import ImgCN from "../imagenes/capacitaciones/imgCN.png"
import ImgGP from "../imagenes/capacitaciones/imgGestionPro.png"
import ImgFC from "../imagenes/capacitaciones/imgCF.png"
import ImgSB from "../imagenes/capacitaciones/ImgSB.png"

import "../css/Capacitaciones.css";

// Sample data for demonstration
const trainingData = [
    {
      id: 1,
      title: "Tecnologias de la informacion",
      description: "Another paragraph explaining the second feature. This is another sentence.",
      icon: ImgTI,
      inscripcion: "/capacitaciones/tecinfo/inscripciones",
      buttonClass: "btn-ti", // Clase específica para este botón
    },
    {
      id:2,
      title: "Habilidades Blandas",
      description: "Another paragraph explaining the second feature. This is another sentence.",
      icon: ImgHB,
      inscripcion: "/capacitaciones/habilidadesblandas/inscripciones",
      buttonClass: "btn-hb", // Clase específica para este botón
    },
    {
      id:3,
      title: "Ventas y Marketing",
      description: "Finaaaal paragraph for the third feature. Let's keep it simple and informative.",
      icon: ImgVM,
      inscripcion: "/capacitaciones/ventasymarketing/inscripciones",
      buttonClass: "btn-vm", // Clase específica para este botón
    },
    {
      id:4,
      title: "Desarrollo Personal",
      description: "Final paragraph for the third feature. Let's keep it simple and informative.",
      icon: ImgDP,
      inscripcion: "/capacitaciones/despersonal/inscripciones",
      buttonClass: "btn-dp", // Clase específica para este botón
    },
    {
      id:5,
      title: "Idiomas Extranjeros",
      description: "Final paragraph for the third feature. Let's keep it simple and informative.",
      icon: ImgIdiomas,
      inscripcion: "/capacitaciones/idiomas/inscripciones",
      buttonClass: "btn-idiomas", // Clase específica para este botón
    },
    {
      id:6,
      title: "Compliance y Normativas",
      description: "Finaaal paragraph for the third feature. Let's keep it simple and informative.",
      icon: ImgCN,
      inscripcion: "/capacitaciones/normativas/inscripciones",
      buttonClass: "btn-cn", // Clase específica para este botón
    },
    {
        id:7,
        title: "Gestión de Proyectos",
        description: "Final paragraph for the third feature. Let's keep it simple and informative.",
        icon: ImgGP,
        inscripcion: "/capacitaciones/gestiondeproyectos/inscripciones",
        buttonClass: "btn-gp",
      },
      {
        id:8,
        title: "Finanzas y Contabilidad",
        description: "Final paragraph for the third feature. Let's keep it simple and informative.",
        icon: ImgFC,
        inscripcion: "/capacitaciones/finanzas/inscripciones",
        buttonClass: "btn-FC",
      },
      {
        id:9,
        title: "Salud y Bienestar",
        description: "Final paragraph for the third feature. Let's keep it simple and informative.",
        icon: ImgSB,
        inscripcion: "/capacitaciones/saludybienestar/inscripciones",
        buttonClass: "btn-SB",
      },
    
  ];
  


  const Capacitacion = () => {
    return (
      <div className="capacitacion-container">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 p-3">
          {trainingData.map((item, index) => (
            <div className="col d-flex align-items-start" key={index}>
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {typeof item.icon === "string" && item.icon.endsWith(".png") ? (
                  <img src={item.icon} alt={item.title} className="circular-image" />
                ) : (
                  <svg className="bi" width="1em" height="1em">
                    <use xlinkHref={`#${item.icon}`}></use>
                  </svg>
                )}
              </div>
              <div className="translucent-box"> {/* Aplicar clase aquí */}
                <h3 className="fs-2 text-body-emphasis">{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.inscripcion} className={`btn ${item.buttonClass}`}>
                  Inscribirse
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

  
  export default Capacitacion;