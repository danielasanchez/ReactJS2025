import './App.css';
import logo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Encabezado from './Components/Encabezado';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import { firebase } from './Settings/ConfigFirebase';
import { onValue, ref, set, update } from 'firebase/database';



function App() {

  const [alumno, setAlumno]= useState({
        matricula:"",
        nombre:"",
        correo:"",
        carrera:""
      })

  const [lista, setLista]= useState([]);

  const [desactivado, setDesactivado]= useState(false);
  
  useEffect(() => {
    //al inicio de la aplicacion se consulta la coleccion de "Alumnos"
    //para iniciar el valor de lista con lo que encuentre en firebase
    let alumnosLista = [];
    const dbRef = ref(firebase, 'Alumnos');
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((row) => {
            alumnosLista.push({
                matricula: row.key,
                nombre: row.val().nombre,
                correo: row.val().correo,
                carrera: row.val().carrera
            })
  
        });
        setLista(alumnosLista)
    }, {
        onlyOnce: true
    });

  }, []);



  const enviar = (event) => {

    event.preventDefault();
    //destructuring del state
    const {matricula,nombre, correo, carrera} = alumno;
      
    //validando que el state no este vacio
    //Nota: podrian usar alguna libreria que valide que el 
    //form no este vacio
    const vacios = matricula.length===0  || nombre.length===0  || correo.length===0  || carrera.length===0 || carrera==="selecciona";

    if(!vacios){
      //update nos permite insertar un nuevo alumno
      //o actualizarlo basandonos en la key / matricula
      //por eso no es necesario eliminar el alumno si ya lo tenemos
      //como en el caso del state
      update(ref(firebase, 'Alumnos/' + matricula), alumno)
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Alumno agregado',
            showConfirmButton: false,
            timer: 1500
          })
        })
      
      let temporal = lista;

      if (desactivado === true) {
        temporal = temporal.filter(a => a.matricula !== matricula)
      }



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

  const eliminar = (id) => {

    //eliminamos de firebase al alumno con la matricula/id/key
    set(ref(firebase, 'Alumnos/' + id), null)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((error) => {
        // The write failed...
      });

    const temporal = lista.filter(a => a.matricula !== id)

    setLista(temporal)
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