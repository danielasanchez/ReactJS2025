import {useContext} from 'react';
import {ContextCRUD} from '../Context/ContextCRUD'

function Encabezado(){
    const {logo} = useContext(ContextCRUD);
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Example #18
          </p>
        </header>
    );
}

export default Encabezado;