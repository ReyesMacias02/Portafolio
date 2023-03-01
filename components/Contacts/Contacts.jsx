import React from 'react'
import './contacts.css'
const Contacts = () => {
  return (
    <section id='Contact'  className='Title-contact'>
    <h1 >¡Hablemos!</h1>
    <p className='subtitle-p'>Si estás interesado en  mi trabajo o tienes alguna inquietud, no dudes en escribirme!</p>
    <div className="wrapper-contact">
    <div className='contenedor'>
        <div className='card-contact'>
            <form action="">
            <label for="fname"> Tu Nombre:</label>
            <div className='contact-input'>
                 <input type="text"  placeholder='Nombre' />
            </div>
            <label for="fname"> Tu E-mail:</label>
            <div className='contact-input'>
                 <input type="text"  placeholder="ejemplo@email.com" />
            </div>
            <label for="fname"> Tu Mensaje:</label>
            <div className='contact-input-mensaje'>
            <textarea name="textarea" rows="10" cols="50" placeholder='Mensaje...'></textarea>

            </div>
            <div className='contact-btn'>
                            <a href="" target="_blank" className='btn-form'>Enviar </a>
                      </div>
            </form>
        </div>
    </div>
   
   
    </div>
</section>
  )
}

export default Contacts