import './App.css'

function App() {
  const edad = 17;

  const conversion=(edad)=>{
    const meses=edad*12;
    return meses;
  }

  const decision=(edad)=>{
    const mensaje=edad>=18 ? "Eres mayor de edad" : "Eres menor de edad";
    return mensaje;
  }

  return (
    <div className="App">
        <h1>{edad}</h1>
        <h1>{conversion(edad)}</h1>
        <h1>{edad>=18 ? "Eres mayor de edad" : "Eres menor de edad"}</h1>
        <h1>{decision(edad)}</h1>
        <h1>{edad>=18 && "Eres mayor de edad"}</h1>
    </div>
  )
}

export default App
