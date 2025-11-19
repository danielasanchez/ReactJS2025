import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Components/Encabezado';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import ContextProvider from './Context/ContextCRUD';

function App() {
  return (
    <ContextProvider>
      <div className="App">
          <Encabezado/>
          <div className="Containers">
            <Formulario/>
            <Listado/>
          </div>
      </div>
    </ContextProvider>
  );
}

export default App;