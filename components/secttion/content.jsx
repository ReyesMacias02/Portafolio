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
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum vero vitae similique quam provident ipsam a rerum suscipit impedit possimus repudiandae veniam dolor sit nobis saepe excepturi officiis, eaque corrupti.</p>
            <div className='social-media'>
                <a href="https://www.facebook.com/jose.macias.7906932/" target="_blank" className='i-7'><FaFacebook/></a>
                <a href="https://www.instagram.com/javierrm2001/"  target="_blank" className='i-8'><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/jose-reyes-51b963180/" target="_blank" className='i-9'><FaLinkedin/></a>
                <a href="https://github.com/ReyesMacias02"  target="_blank" className='i-10'><FaGithub/></a>
            </div>
            <a href="curriculum.pdf" download className='btn'>Download CV</a>
        </div>
        <div className="home-img">
            <img src="perfil.png" alt="" />
        </div>

    </section>
  )
}

export default Contents