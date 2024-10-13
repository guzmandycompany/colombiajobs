import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import img3 from '../imagenes/img3.jpg'; // Ajusta la ruta según sea necesario
import imgservicios from "../imagenes/imgservicios.png"
import imgindustria from "../imagenes/imgindustria.jpg"
import imgtransporte from "../imagenes/imgtransporte.jpg"
import imgconstruccion from "../imagenes/imgcontruccion.jpg"
import imgotros from "../imagenes/imgotros.jpeg"
import "../css/Empresas.css"



const Empresas = () => {
  // Array de objetos que contiene la información de cada tarjeta
  const cardData = [
    {
      id: 1,
      title: 'Comercio',
      text: 'El sector del comercio en Colombia es clave para la economía. Se adapta constantemente a nuevas tendencias y demanda de los consumidores.',
      time: '5 minutos',
      link: "/empresas/ganaderia",
      image: img3 // Agrega la URL de la imagen aquí
    },
    {
      id: 2,
      title: 'Servicios',
      text: 'El sector de servicios en Colombia abarca turismo, educación y salud, impulsando el crecimiento económico y ofreciendo diversas oportunidades.',
      time: '10 minutos',
      link: "/empresas/servicios",
      image: imgservicios
    },
    {
      id: 3,
      title: 'Industria',
      text: 'El sector industrial en Colombia incluye manufactura, construcción y minería, desempeñando un papel clave en la economía y generación de empleo.',
      time: '15 minutos',
      link: "/empresas/industria",
      image: imgindustria
    },
    {
      id: 4,
      title: 'Transporte',
      text: 'El sector transporte en Colombia es vital para la economía, facilitando la movilidad de personas y mercancías, impulsando el comercio y mejorando la conectividad en todo el país.',
      time: '20 minutos',
      link: "/empresas/transporte",
      image: imgtransporte
    },
    {
      id: 5,
      title: 'Contruccion',
      text: 'El sector construcción en Colombia abarca proyectos de infraestructura, edificación y obras civiles, siendo fundamental para el desarrollo económico y la creación de empleo en diversas regiones.',
      time: '25 minutos',
      link: "/empresas/contruccion",
      image: imgconstruccion
    },
    {
      id: 6,
      title: 'Otros',
      text: 'El sector "otros" en Colombia abarca actividades diversas como tecnología y servicios, impulsando la innovación y contribuyendo al crecimiento económico de nuestro pais.',
      time: '30 minutos',
      link: "/empresas/otros",
      image: imgotros
    },
    
  ];

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardData.map((card) => (
            <div className="col" key={card.id}>
              <div className="card shadow-sm">
              <img 
                src={card.image} 
                className="card-img-top" 
                alt={card.title} 
                width="100%" // Ajustar según lo necesites
                height="225" // Ajustar según lo necesites
              />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5> {/* Título de la tarjeta */}
                  <p className="card-text">{card.text}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to={card.link}>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Información sobre las empresas
                        </button>
                      </Link>
                      <Link to="/login">
                      <button type="button" className="btn btn-sm btn-outline-secondary">
                        Iniciar sesion
                      </button>
                      </Link>
                    </div>
                    <small className="text-body-secondary"></small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default Empresas;
