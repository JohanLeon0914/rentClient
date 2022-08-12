/* eslint-disable jsx-a11y/alt-text */
import styles from './CardPersona.module.css'
import { Link } from 'react-router-dom';


export function CardPersona({ persona }) {
    const imgUrl = persona.imagen
    return(
        <li className={styles.movieCard}>
            <Link to={'/detallePersona/' + persona.id}>
            <img
                 width={350} 
                 height={400}
                 className={styles.movieImage} 
            src={imgUrl} />
            <p className={styles.parrafoCap}> {persona.nombre} </p> 
            <p className={styles.parrafoCap}> Renta por hora: {persona.precio}$ </p> 
            
            </Link>
        </li>
    )
}