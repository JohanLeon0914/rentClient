import emailjs from '@emailjs/browser'
import { useParams } from "react-router-dom"
import styles from './Mailer.module.css'
import { useEffect, useState } from 'react'
import swal from "sweetalert";
import Navbar from '../navbar2/Navbar';
import { Footer } from '../footer/Footer';

export const Mailer = (props) => {

  const { personaId } = useParams()
  const [per, setPer] = useState(null)
  
  
      useEffect(() => {
        fetch(`http://localhost:9000/obtenerPersona/${personaId}`)
        .then(response => response.json())
        .then(data => {
          setPer(data)
          console.log(data)
        });
    }, [personaId]);
    if(!per) {
      return null; //para evitar incluri una persona vacia
  }

  const mostrarAlerta = () => {
    swal({
      title: 'Gracias por tu solicitud',
      text: `Tu solicitud para rentar a ${per[0].nombre} se envio con exito`,
      icon: 'success',
      button: 'Aceptar'
    })
  }
    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_yydk9mm',
        'template_6nxh1xz',
        event.target,
        'mY6I5remDMwh5Txgh')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    if(!props.autentificado) {
      window.location.href = '/'
    }
    return (
      <>
        <Navbar />
        <div className='div-form'>
        <form className={styles.form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input type="text" name='user_name' className={styles.controls}/>
          <hr />
  
          <label>Email</label>
          <input type="email" name='user_email' className={styles.controls}/>
          <hr />

          <label>Numero de telefono</label>
          <input type="text" name='user_telefono'className={styles.controls} />
          <hr />

          <label>Direccion</label>
          <input type="text" name='user_direccion' className={styles.controls} />
          <hr />

          <label>Punto de encuentro</label>
          <input type="text" name='user_encuentro' className={styles.controls}/>
          <hr />

          <label>Genero</label>
          <input type="text" name='user_genero' className={styles.controls}/>
          <hr />

          <label>Metodo de pago preferido</label>
          <input type="text" name='user_pago' className={styles.controls}/>
          <hr />
  
          <label>¿Para que deseas este servicio?</label>
          <textarea name="user_message" id="" cols="30" rows="10" className={styles.controls}></textarea>
          <hr />

          

          <input type="hidden" name="persona_renta" value={per[0].nombre} />

          <button className={styles.botons} onClick={() => mostrarAlerta()}>Enviar</button>
        </form>
      </div>
      <Footer />
      </>
    )
}