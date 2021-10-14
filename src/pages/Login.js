import React, { Component } from "react";
import '../css/Login.css'
class Login extends Component {
  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input type="text" class="form-control" />
            <br />
            <label> Contraseña:</label>
            <br />
            <input type="password" class="form-control" />
            <br />
            <button className="btn btn-primary"> Iniciar Sesion</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
