import React from 'react'
import './contacts.css'
function enviar(){
  swal("Enviado!", "Su mensaje fue enviado con exito", "Aceptar");
  
}
const Contacts = () => {

  return (
    <section id='Contact'  className='Title-contact'>
    <h1 >¡Hablemos!</h1>
    <p className='subtitle-p'>Si estás interesado en  mi trabajo o tienes alguna inquietud, no dudes en escribirme!</p>
    <div className="wrapper-contact">
    <div className='contenedor'>
        <div className='card-contact'>
            <form action="https://formsubmit.co/c1b4d117fa6e92ad4b872a136c7f7f19" method="POST">
            <label for="fname"> Tu Nombre:</label>
            <div className='contact-input'>
                 <input type="text" name='name'  placeholder='Nombre' />
            </div>
            <label for="fname"> Tu E-mail:</label>
            <div className='contact-input'>
                 <input type="email" name='email'  placeholder="ejemplo@email.com" />
            </div>
            <label for="fname"> Tu Mensaje:</label>
            <div className='contact-input-mensaje'>
            <textarea name="comentario" rows="10" cols="50" placeholder='Mensaje...'></textarea>

            </div>
            <div className='contact-btn'>
            <button className='btn-form' onClick={enviar} type="submit">Enviar</button>
            <input type="hidden" name="_captcha" value="false"></input>
            
            <input type="hidden" name="_next" value="http://127.0.0.1:5173/#Contact"></input>
           
            
                                 </div>
            </form>
        </div>
    </div>
   
   
    </div>
</section>
  )
}

export default Contacts