import './App.css';
import logo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Button, Table, Form} from 'react-bootstrap';
//https://sweetalert2.github.io/
import Swal from 'sweetalert2';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example #13
          </p>
        </header>
        <div className="Containers">
          <div className="Form">

            <Form  onSubmit={enviar}>
              <Form.Group className="mb-3">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control placeholder="Ingresa tu matrícula"
                  onChange={guardarCambios}
                  value={alumno.matricula}
                  name="matricula"
                  disabled={desactivado}
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

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
          <div className="List">
              {
                lista.length > 0 
                ?
                
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Matrícula</th>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Carrera</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                    { 
                    
                      lista.map((a,index)=>{
                        return(
                          <tr key={index}>
                            <td>{a.matricula}</td>
                            <td>{a.nombre}</td>
                            <td>{a.correo}</td>
                            <td>{a.carrera}</td>
                            <td><Button variant="success" onClick={()=>modificar(a.matricula)}>Modificar</Button></td>
                            <td><Button variant="danger" onClick={()=>eliminar(a.matricula)}>Eliminar</Button></td>
                          </tr>

                        )
                      })

                    }
                    
                  </tbody>
                </Table>
                :
                <p>No hay alumnos</p>

              }
              


          </div>

        </div>
    </div>
  );
}

export default App;