import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';


function App() {

  return (
    <div className="App">
      <Header
        titulo="Example #"
        numero={8}
      />
      <Body
        texto="Este es un texto"
        numero={100}
        booleano={false}
        arreglo={[1,"Hola",3,4,'Mundo']}
        funcion={(num)=>num*2}
        objeto={{nombre:"Daniela", apellido:"Sánchez"}}
        etiqueta={<h3>Hola esta es una etiqueta</h3>}
      />
      <Footer
        pie={<p>Copyright &copy; Todos los derechos reservados</p>}
      />
      
    </div>
  )
}

export default App
