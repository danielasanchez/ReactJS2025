import {Form,InputGroup} from 'react-bootstrap';

function Buscador({setTitulo}){
    return(
        <div className="Buscador">
 
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Buscador</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder='¿Qué película quieres buscar?'
              onChange={(e) => setTitulo(e.target.value)}
            />
          </InputGroup>

        </div>
    );
}

export default Buscador;