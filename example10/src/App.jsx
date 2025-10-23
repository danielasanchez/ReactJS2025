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
        numero={10}
      />
      <Body
        texto="Este es un texto"
        numero={100}
      >
         <p>Este es otro texto desde props children</p>
         <p>otro desde props children</p>
      </Body>

      <Footer
        pie={<p>Copyright &copy; Todos los derechos reservados</p>}
      />
      
    </div>
  )
}

export default App
