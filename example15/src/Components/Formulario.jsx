
import {Button, Form} from 'react-bootstrap';


function Formulario({enviar, guardarCambios, alumno, desactivado}){

    //const {enviar, guardarCambios, alumno, desactivado} = props;

    return(
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
    );
}

export default Formulario;