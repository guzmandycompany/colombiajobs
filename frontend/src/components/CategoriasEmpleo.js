import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import img3 from '../imagenes/img3.jpg'; // Ajusta la ruta según sea necesario
import imgservicios from "../imagenes/imgservicios.png"
import imgindustria from "../imagenes/imgindustria.jpg"


const CategoriasEmpleo = () => {

    
   
        // Array de objetos que contiene la información de cada tarjeta
        const cardData = [
          {
            id: 1,
            title: 'Trabaja con JobsColombia!',
            text: 'Al elegir Trabajar con nosotros contaras con tu propio tiempo y disponibilidad con un equipo de asesores dedicados a realizar las tareas de manera eficiente en colaboracion con todo el entorno laboral de JobsColombia.',
            time: '5 minutos',
            link: "/empresas/ganaderia",
            image: img3 // Agrega la URL de la imagen aquí
          },
          {
            id: 2,
            title: 'Prestador de servicios',
            text: 'Elige prestar tus servicios a las mejores organizaciones del pais por medio de JobsColombia',
            time: '10 minutos',
            link: "/empresas/servicios",
            image: imgservicios
          },
          {
            id: 3,
            title: 'Tiempo Completo',
            text: 'trabaja para las mejores empresas de colombia por medio de excelentes contratos y posibilidades para los trabajadores',
            time: '15 minutos',
            link: "/empresas/industria",
            image: imgindustria
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
    
      
    
    export default CategoriasEmpleo;
    