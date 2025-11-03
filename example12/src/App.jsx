import './App.css';
import logo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Table, Form} from 'react-bootstrap';

function App() {

  const [alumno, setAlumno]= useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
  })

  const guardarCambios=(e)=>{
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example #12
          </p>
        </header>
        <div className="Containers">
          <div className="Form">

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control placeholder="Ingresa tu matrícula"
                  onChange={guardarCambios}
                  value={alumno.matricula}
                  name="matricula"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="Ingresa tu nombre completo"
                  onChange={guardarCambios}
                  value={alumno.nombre}
                  name="nombre"
                />
                
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo" 
                  onChange={guardarCambios}
                  value={alumno.correo}
                  name="correo"
                />
                <Form.Text className="text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Carrera</Form.Label>
                  <Form.Select 
                    onChange={guardarCambios}
                    value={alumno.carrera}
                    name="carrera"
                  >
                    <option value="selecciona">selecciona</option>
                    <option value="Informatica">Informática</option>
                    <option value="Sistemas">Sistemas Computacionales</option>
                    <option value="TICS">TICS</option>
                    <option value="IA">IA </option>
                    <option value="Ciberseguridad">Ciberseguridad</option>
                  </Form.Select>
              </Form.Group>


            </Form>
          </div>
          <div className="List">
            <p>{alumno.matricula}</p>
            <p>{alumno.nombre}</p>
            <p>{alumno.correo}</p>
            <p>{alumno.carrera}</p>
          </div>

        </div>
    </div>
  );
}

export default App;