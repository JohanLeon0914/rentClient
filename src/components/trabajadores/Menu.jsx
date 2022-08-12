import { Component } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Menu extends Component {
    cerrarSesion = () => {
        cookies.remove('id', {path:'/'})
        cookies.remove('correo', {path:'/'})
        cookies.remove('nombre', {path:'/'})
        window.location.href = './'
    }

    componentDidMount() {
        if(!cookies.get('nombre')) {
            window.location.href = './'
        }
    }

    render() {
        return (
            <div>
                Menu principal
                <h1>Bienvenido  {cookies.get('name')}</h1>
                <br />
                <button onClick={() => this.cerrarSesion()}>Cerrar sesion</button>
            </div>
        )
    }
}

export default Menu