import { useEffect, useState } from 'react'
import { CardPersona } from './CardPersona';
import styles from './PersonasGrid.module.css'
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

export function PersonasGrid() {

    const [per, setPer] = useState([])

    const query = useQuery()
    const search = query.get('search')

    useEffect(() => {
        const searchUrl = search
        ? "http://localhost:9000/search/persona/" + search
        : "http://localhost:9000/personas";
        fetch(`${searchUrl}`)
        .then(response => response.json())
        .then(data => {
          setPer(data)
        });
    }, [search]); //si se cambia este parametro de busqueda, se vuelve a ejecutar el useEffect
   

    return(
        <ul className={styles.moviesGrid}>
            {per.map((persona) => (
                    <CardPersona persona={persona} />
            ))}
        </ul>
    )
}