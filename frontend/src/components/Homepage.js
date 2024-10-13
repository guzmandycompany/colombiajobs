import React from 'react';
import imgHome from '../imagenes/ImgHome.jpg'; // Asegúrate de importar tu imagen correctamente.

const HomePage = () => {
    return (
        <div>
        <div className="d-flex justify-content-between p-3"> {/* Contenedor con flexbox */}
            {/* Primera parte del cuadro */}
            <div className="col-md-6 p-3 text-start bg-body-tertiary">
            <h3 className="fw-normal text-muted mb-3 display-5 custom-font">JobsColombia</h3> {/* Aplicando la fuente personalizada */}
            <h1 className="display-2 fw-bold custom-font">Trabaja con nosotros</h1> {/* Aplicando la fuente personalizada */}
            <h3 className="fw-normal text-muted mb-3 justify-text custom-font"> {/* Aplicando la fuente personalizada */}
                Sin importar tus habilidades, experiencia o tipo de estudios, con nosotros encontrarás el trabajo que se adecue a tus necesidades.
            </h3>
            </div>

            {/* Segunda parte del cuadro */}
            <div className="col-md-6 p-3 text-start bg-body-secondary d-flex align-items-center justify-content-center"> {/* Asegúrate de que el contenedor sea un flexbox */}
                <img src={imgHome} alt="Descripción de la imagen" className="img-fluid" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* La propiedad 'objectFit: cover' asegura que la imagen mantenga su proporción y cubra el contenedor */}
            </div>
        </div>
        <div>
        <div className="container">
    <div className="row justify-content-between p-3"> {/* Contenedor de Bootstrap para la cuadrícula */}
        
        {/* Primera sección */}
        <div className="col-md-3 mb-3"> {/* Columna que ocupa 3 espacios en pantallas medianas */}
            <h3 className="fw-normal">Publicar un trabajo</h3>
            <p>puedes publicar tus ofertas de trabajo para conectarte con el personal mas calificado para los puestos buscados</p>
        </div>

        {/* Segunda sección */}
        <div className="col-md-3 mb-3"> {/* Columna que ocupa 3 espacios en pantallas medianas */}
            <h3 className="fw-normal">Encuentra las mejores ofertas del mercado</h3>
            <p>con nosotros puedes ubicar las mejores ofertas de trabajo que existen a nivel nacional de manera remota o fisica.</p>
        </div>

        {/* Tercera sección */}
        <div className="col-md-3 mb-3"> {/* Columna que ocupa 3 espacios en pantallas medianas */}
            <h3 className="fw-normal">Establecer conexiones</h3>
            <p>Por medio de nuestros servicios podemos establecer conexiones entre los trabajadores y las empresas.</p>
        </div>

        {/* Cuarta sección */}
        <div className="col-md-3 mb-3"> {/* Columna que ocupa 3 espacios en pantallas medianas */}
            <h3 className="fw-normal">Confiabilidad en nuestro proceso</h3>
            <p>te ofrecemos un servicio de discricion estableciendo confianza con nuestros clientes y la posibilidad de mejorar sus oportunidades dentro de sus organizaciones y vidas</p>
        </div>
        
    </div>
</div>

        </div>
        </div>
    );
}

export default HomePage;



