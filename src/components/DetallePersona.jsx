
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import styles from './DetallePersona.module.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import swal from "sweetalert";
import Navbar from "../components/navbar2/Navbar";
import { Footer } from "./footer/Footer";

export function DetallePersona() {

    const mostrarAlerta = () => {
      swal({
        title: 'No te has Logeado',
        text: 'tienes que logearte, antes de empezar a rentar',
        icon: 'warning',
        button: 'Aceptar'
      })
    }

    const { isAuthenticated } = useAuth0();

    const [cap, setCap] = useState(null)
    const { personaId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:9000/obtenerPersona/${personaId}`)
        .then(response => response.json())
        .then(data => {
          setCap(data)
          console.log(data)
        });
    }, [personaId]);

    if(!cap) {
        return null; //para evitar incluri un cap vacio
    }

    return(
      <>
      <Navbar />
      <div className={styles.detailsContainer} >
        <img className={styles.col + " " + styles.movieImage}
         src={cap[0].imagen}
        alt={cap[0].nombre} />
        <div className={styles.col + " " + styles.MovieDetails}>
          <p className={styles.firstItem}>
            Nombre: {cap[0].nombre}
          </p>
          <br />
          <p className={styles.secondItem}>
           <strong> Descripcion: </strong> {cap[0].descripcion}
          </p>
          <br />
          <p className={styles.secondItem}>
            <strong> Edad: </strong> {cap[0].edad}
          </p>
          <br />
          <p className={styles.secondItem}>
            <strong> Genero: </strong> {cap[0].genero}
          </p>
          <br />
          <p className={styles.secondItem}>
            <strong> Precio por hora: </strong> {cap[0].precio}$
          </p>
          <br />
          {isAuthenticated ? 
          <Link to={'/rentar/' + personaId}>
          <button className={styles.button}>Rentar</button>
        </Link> : 
          <button className={styles.button} onClick={() => mostrarAlerta()}>Rentar</button>}
        </div>
        
      </div>
      <Footer />
    </>
    )
}