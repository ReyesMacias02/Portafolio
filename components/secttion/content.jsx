import React from 'react'
import './content.css'
import { FaFacebook,FaInstagram,FaLinkedin,FaGithub } from 'react-icons/fa';


const Contents = () => {


  return (

    <section className='home' id='about' >
        <div className='home-content'>
            <h3>Hello, It`s Me</h3>
            <h1>Javier Reyes M</h1>
            <h3>And I`am <span className='multiple-text'></span></h3>
            <p> Estudiante de tecnología de la información
en la ULEAM.
Apasionado de la Programación, busco empezar
mi carrera aportando sólidos conocimientos
académicos de programación (Java, C#,
Typescript, Javascript, HTML5), conocimientos en
Base de datos, Frontend (Angular, React), etc Mi capacidad de generar ideas y mi
facilidad para trabajar en equipo son mis
principales herramientas.
</p>
            <div className='social-media'>
                <a href="https://www.facebook.com/jose.macias.7906932/" target="_blank" className='i-7'><FaFacebook/></a>
                <a href="https://www.instagram.com/javierrm2001/"  target="_blank" className='i-8'><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/jose-reyes-51b963180/" target="_blank" className='i-9'><FaLinkedin/></a>
                <a href="https://github.com/ReyesMacias02"  target="_blank" className='i-10'><FaGithub/></a>
            </div>
            <a href="curriculum.pdf" download className='btn'>Download CV</a>
        </div>
        <div className="home-img">
            <img src="perfil2.png" alt="" />
        </div>

    </section>
  )
}

export default Contents