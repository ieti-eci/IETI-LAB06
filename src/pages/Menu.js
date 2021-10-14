import React, { Component } from 'react'
import '../css/Menu.css';
import Cookies from "universal-cookie";
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from '../components/TodoList';
import 'font-awesome/css/font-awesome.min.css'

const cookies = new Cookies();

export default class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id',{path:"/"});
        cookies.remove('primer_apellido',{path:"/"});
        cookies.remove('segundo_apellido',{path:"/"});
        cookies.remove('nombre',{path:"/"});
        cookies.remove('username',{path:"/"});
        window.location.href='./';
    }
    componentDidMount(){
        if(!cookies.get('id')){
          window.location.href="./";
        }
    }
    render() {
        console.log('id:',cookies.get("id"));
        console.log('primer_apellido:',cookies.get("primer_apellido"));
        console.log('segundo_apellido:',cookies.get("segundo_apellido"));
        console.log('nombre:',cookies.get("nombre"));
        console.log('username:',cookies.get("username"));
        return (
            
            <div className="App">
                      <TodoList />
            <br/>
            <button onClick={()=>this.cerrarSesion()}> Cerrar sesion</button>
            </div>
        )
    }
}
