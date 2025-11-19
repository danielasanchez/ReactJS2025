import {Button, Table} from 'react-bootstrap';
import {useContext} from 'react';
import {ContextCRUD} from '../Context/ContextCRUD'


function Listado(){
    const {lista, eliminar, modificar} = useContext(ContextCRUD);
    return(
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
    );
}


export default Listado;