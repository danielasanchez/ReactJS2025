import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const mifuncion1=()=>{
    console.log("Hola desde función #1");
  }
  const mifuncion2=()=>{
    console.log("Hola desde función #2");
  }
  return (
    <div className="App">

      <div className="App-body">
        hola mundo
        <Button variant="primary" onClick={()=>mifuncion1()}>Botoncito #1</Button>
        <Button variant="primary" onClick={()=>mifuncion2()}>Botoncito #2</Button>
      </div>

    </div>
  )
}

export default App
