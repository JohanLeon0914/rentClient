import React, { Component } from "react";
import '../css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Cookies from 'universal-cookie'

const baseUrl = 'http://localhost:9000/login'
const cookies = new Cookies()

class Login extends Component {

    state = {
        form: {
            correo: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async() => {
        await axios.post(baseUrl, {correo:this.state.form.correo, password: this.state.form.password})
        .then(response => {
            console.log(response.data)
            return response.data // aqui retorno la data de el usuario si fue correcto
        })
        .then(response => { //y aqui la utilizo
            if(response.nombre) {
                var respuesta = response;
                console.log(response)
                cookies.set('id', respuesta.id, {path:'/'})//el path es para que la cookie se accesible desde cualquier pagina
                cookies.set('correo', respuesta.correo, {path:'/'})
                cookies.set('nombre', respuesta.nombre, {path:'/'})
                alert('Bienvenido ' + respuesta.nombre)
                window.location.href = './menu'
            } else {
                alert('El usuario y/o la contraseña no son correctos')
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    componentDidMount() {
        if(cookies.get('nombre')) {
            window.location.href = './menu'
        }
    }

    render() {
        return (
            <div className="containerPrincipal">
            <div className="containerSecundario">
              <div className="form-group">
                <label>Usuario: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="correo"
                  onChange={this.handleChange}
                />
                <br />
                <label>Contraseña: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.handleChange}
                />
                <br />
                <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
              </div>
            </div>
          </div>
        )
    }
}

export default Login;