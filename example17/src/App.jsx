import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/movies.png';
import { useState, useEffect } from 'react';
import Encabezado from './Components/Encabezado';
import Listado from './Components/Listado';
import Buscador from './Components/Buscador';

function App() {

  const [titulo, setTitulo] = useState("");
 
  const [arreglo, setArreglo] = useState([]);

  const [total, setTotal]= useState(0);

  const [busqueda, setBusqueda]= useState(false);
  
  useEffect(() => {
    const apikey = "" //<-- Your api key
    const api_url = `http://www.omdbapi.com/?s=${titulo}&apikey=${apikey}`

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado => {
        //console.log(resultado);
        const { Search = [] } = resultado;

        setTotal(Search.length);
        setArreglo(Search);
        setBusqueda(true);

        if (titulo.length===0)
        {
          setBusqueda(false);
        }

      });
  }, [titulo]);

  return (
    <div className="App">
        <Encabezado
          logo={logo}
        />

        <Buscador
          setTitulo={setTitulo}
        />

        <Listado
           busqueda={busqueda}
           total={total}
           arreglo={arreglo}
        />
       
    </div>
  );
}

export default App;