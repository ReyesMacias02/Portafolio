import React from 'react'
import './Skill.css'
import {FaLaptopCode, FaCode,FaColumns,FaUserGraduate,FaTools,FaBullhorn} from'react-icons/fa'
const Skill = () => {
  return (
    <section id='Skill'  className='Title'>
        <h1 >Mis Habilidades</h1>
        <div className="wrapper">
        <div className='contenedor'>
            <div className='card'>
                <div className='iconos'>
                    <FaLaptopCode className='iconos-a'/>
                </div>
                
                <h3>Responsive diseño</h3>
                <p>Con mi experiencia en patrones de diseño responsivo tengo una vision  clara 
acerca de como implementarlos de manera efectiva en cualquier proyecto
</p>
            </div>
        </div>
       
        <div className='contenedor'>
            <div className='card'>
                <div className='iconos'>
                    <FaTools className='iconos-a'/>
                </div>
                
                <h3>Resolución de problemas</h3>
                <p>Tengo habilidades para identificar y resolver problemas.
Esto incluye la capacidad de analizar problemas 
y diseñar soluciones efectivas.</p>
            </div>
        </div>
       
        <div className='contenedor'>
            <div className='card'>
                <div className='iconos'>
                    <FaColumns className='iconos-a'/>
                </div>
                
                <h3>Sistema de diseño</h3>
                <p>Tengo manejo de sistemas de diseño,
lo cual permite agilidad en el proceso
de diseño acortando los tiempos en la
creación de las interfaces dentro del
proyecto.</p>
            </div>
        </div>
       
        <div className='contenedor'>
            <div className='card'>
                <div className='iconos'>
                    <FaBullhorn className='iconos-a'/>
                </div>
                
                <h3>Comunicación</h3>
                <p>Puedo mantener comunicación con el
equipo de desarrollo, atento a
cualquier inquietud que se presente
con el fin de llevar el proyecto de
manera correcta.</p>
            </div>
        </div>
       
        <div className='contenedor'>
            <div className='card'>
                <div className='iconos'>
                    <FaCode className='iconos-a'/>
                </div>
                
                <h3>HTML y css</h3>
                <p>Tengo conocimientos basicos y bien
fundamentados de html y css, lo que
me permite tener un panorama mas
claro a la hora de tomar mis decisiones
de diseño para los desarrolladores.</p>
            </div>
        </div>
       
        <div className='contenedor'>
            <div className='card'>
                <div className='iconos'>
                    <FaUserGraduate className='iconos-a'/>
                </div>
                
                <h3>Formación continua</h3>
                <p>Soy un aprendiz constante y siempre estoy 
buscando nuevas formas de mejorar y expandir
mis habilidades. Estoy dispuesto 
a aprender y trabajar duro para mejorar mi 
carrera y mi habilidad como programador.</p>
            </div>
        </div>
       
        
       
       
       
        </div>
    
    
    
    </section>
  )
}

export default Skill