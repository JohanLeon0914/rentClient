import styles from './Register.module.css'
import swal from "sweetalert";

export function register() {

    const mostrarAlerta = () => {
        swal({
          title: 'Gracias por registrarte',
          text: `Tu registro se completo con exito`,
          icon: 'success',
          button: 'Aceptar'
        })
      }

      const registrarse = (event) => {

    }

    return(
        <div className='div-form'>
        <form className={styles.form} onSubmit={registrarse}>
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

          <button className={styles.botons} onClick={() => mostrarAlerta()}>Enviar</button>
        </form>
      </div>
    )
}