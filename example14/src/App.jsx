import './App.css';
import logo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Table, Form} from 'react-bootstrap';
//https://sweetalert2.github.io/
import Swal from 'sweetalert2';
import Encabezado from './Components/Encabezado';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';

function App() {

  const [alumno, setAlumno]= useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      })

  const [lista, setLista]= useState([])

  const [desactivado, setDesactivado]= useState(false);
  
  
  const enviar = (event) => {

    event.preventDefault();
    //destructuring del state
    const {matricula,nombre, correo, carrera} = alumno;
      
    //validando que el state no este vacio
    //Nota: podrian usar alguna libreria que valide que el 
    //form no este vacio
    const vacios = matricula.length===0  || nombre.length===0  || correo.length===0  || carrera.length===0 || carrera==="selecciona";

    if(!vacios){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Alumno agregado',
        showConfirmButton: false,
        timer: 1500
      })
      
      //quitamos de lista el alumno actual (por si lo estamos modificando)
      const temporal = lista.filter(a=>a.matricula!=alumno.matricula);

      //agregamos el alumno a la lista filtrada
      setLista([...temporal,alumno]);

      //ponemos en "vacio" el state de alumno para
      //que se limpien los controles de entrada
      setAlumno({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      });

      //cambiamos el estado para activar el input de matricula
      setDesactivado(false);

    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
 } 

  const guardarCambios=(e)=>{
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value
    })
    
  }

  const eliminar=(id)=>{
    const temporal = lista.filter(a=>a.matricula!=id);
    setLista(temporal);
  }

  const modificar=(id)=>{
    //se busca el alumno en la lista
    const encontrado = lista.find(a=>a.matricula==id);
    //al querer modificarlo lo envian al estado
    //con la finalidad de esta informacion se 
    //coloque en los controles de entrada
    setAlumno({
        matricula:encontrado.matricula,
        nombre:encontrado.nombre,
        correo:encontrado.correo,
        carrera:encontrado.carrera
      })
    //cambiamos el estado de "desactivado" para evitar que se cambie 
    //el numero de matricula
    setDesactivado(true);
  }

  return (
    <div className="App">
        <Encabezado
          logo={logo}
        />
        <div className="Containers">
          <Formulario
            enviar={enviar}
            guardarCambios={guardarCambios}
            alumno={alumno}
            desactivado={desactivado}
          />
          <Listado
            lista={lista}
            modificar={modificar}
            eliminar={eliminar}
          />
          

        </div>
    </div>
  );
}

export default App;