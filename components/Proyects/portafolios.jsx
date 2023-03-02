import React from 'react'
import './portafolios.css'
const portafolios = () => {
  return (
    <section id='Portafolio'  className='Title-portafolio'>
        <h1 >Mis Proyectos</h1>
        <div className="wrapper-portafolio">
        <div className='contenedor'>
            <div className='card-portafolio'>
                <div className='img-p'>
                    <img src="proyecto1.png" alt="" className='img-a' />
                  
                </div>
                
                <h3>Diseño de Ecommerce-React+Tailwind</h3>
                <p>Desarrolle un diseño inspirado en un negocio de comida como un tipo de dashboard con opcion de  carrito integrado fue desarrollado con React y para el desarrollo de diseño se uso Tailwind, diseño inspirado en un  diseño de Figma</p>
                      <div className='cont-btn'>
                            <a href="https://reyesmacias02.github.io/Tablero-Control-Restaurant/" target="_blank" className='btn-view'>Preview </a>
          <a href="https://github.com/ReyesMacias02/Tablero-Control-Restaurant" target="_blank" className='btn-view'>Link Code</a>
        
                      </div>
                     
                      </div>
        </div>
        <div className='contenedor'>
            <div className='card-portafolio'>
                <div className='img-p'>
                    <img src="proyecto2.png" alt="" className='img-a' />
                  
                </div>
                
                <h3>Dictionary web app</h3>
                <p>Se desarrollo esta aplicación web de diccionario utilizando la API de diccionario y lograr que se parezca lo más posible al diseño extraido de una desafio.

Se hizo uso de React+Tailwind con una interfaz clara y una dark y la API de el diccionario en el lenguaje de Ingles </p>
                      <div className='cont-btn'>
                            <a href="https://reyesmacias02.github.io/dictionary-React-Tailwind-/" target="_blank" className='btn-view'>Preview </a>
          <a href="https://github.com/ReyesMacias02/dictionary-React-Tailwind-" target="_blank" className='btn-view'>Link Code</a>
        
                      </div>
                     
                      </div>
        </div>
        <div className='contenedor'>
            <div className='card-portafolio'>
                <div className='img-p'>
                    <img src="proyecto3.png" alt="" className='img-a' />
                  
                </div>
                
                <h3>Clon de un banco virtual</h3>
                <p>Se clono un diseño estraido de figma de una pagina de presentacion de un sitema bancario en linea  que se procedio a llamar HooBank, se llevo a cabo en React+Tailwind.</p>
                      <div className='cont-btn'>
                            <a href="https://reyesmacias02.github.io/hookbank-deploy/" target="_blank" className='btn-view'>Preview </a>
          <a href="https://github.com/ReyesMacias02/hookbank-deploy/tree/main" target="_blank" className='btn-view'>Link Code</a>
        
                      </div>
                     
                      </div>
        </div>
        <div className='contenedor'>
            <div className='card-portafolio'>
                <div className='img-p'>
                    <img src="proyecto4.png" alt="" className='img-a' />
                  
                </div>
                
                <h3>Web inspired by Discord</h3>
                <p>Diseñe un diseño de aplicación web inspirado en Discord y Slack, se desarrollo con React+Tailwind siguiendo un diseño web con glassmorphism en el diseño.</p>
                      <div className='cont-btn'>
                            <a href="https://reyesmacias02.github.io/Web-Glassmorphism-Discord/" target="_blank" className='btn-view'>Preview </a>
          <a href="https://github.com/ReyesMacias02/Web-Glassmorphism-Discord" target="_blank" className='btn-view'>Link Code</a>
        
                      </div>
                     
                      </div>
        </div>
        </div>
    </section>
  )
}

export default portafolios