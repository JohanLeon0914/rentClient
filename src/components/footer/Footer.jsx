import styles from './Footer.module.css'
export function Footer() {
    return(
        <>
        <footer>
            <div className={styles.containerFooterAll}>
                <div className={styles.containerBody}>
                    <div className={styles.colum1}>
                        <h2>Rent Next - 2022</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sint suscipit rem perspiciatis adipisci corporis? 
                            Voluptatibus ipsa minus laudantium distinctio fugit dicta. 
                            Ipsam reiciendis explicabo sapiente esse sequi tenetur in 
                            error!
                        </p>
                    </div>
                    <div className={styles.colum2}>

                        <h2>Redes sociales</h2>

                        <div className={styles.row}>
                            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="Instagram" />
                            <label>Siguenos en Instagram</label>
                        </div>

                        <div className={styles.row}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="facebook" />
                            <label>Siguenos en Facebook</label>
                        </div>
                        
                        

                    </div>
                </div>
                
            </div>
            <div className={styles.containerFooter}>
                    <div className={styles.footer}>
                        <div className={styles.copi}>
                            ©2022 Todos los derechos reservados
                            </div>
                    </div>        
             </div>
        </footer>
        </>
        
    )
}