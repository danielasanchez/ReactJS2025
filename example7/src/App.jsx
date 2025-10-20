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
        numero={7}
      />
      <Body
        texto1="Texto aqui"
      />
      <Footer
        pie={<p>Copyright &copy; Todos los derechos reservados</p>}
      />
      
    </div>
  )
}

export default App
