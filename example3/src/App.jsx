import './App.css'

function App() {
  const appName= "My favorites"
  const peliculas=[
      {id:1, title:'Back to the future', year:1985},
      {id:2, title:'Scream', year:1996},
      {id:3, title:'Titanic', year:1997}
  ]
  return (
    <div className="App">
      <h2>{appName}</h2>
      {
        peliculas.map((p,i)=>
          {
            return(
            <div key={i}>
              <h4> Titulo: {p.title}</h4>
              <h4> Año: {p.year}</h4>
            </div>)
          }
        ) 
      }
    </div>
  )
}

export default App


/*

//utilizando el id de la pelicula
peliculas.map(p=><h4 key={p.id}>{p.title}</h4>)

//utilizando el index del arreglo
peliculas.map((p,i)=><h4 key={i}>{p.title}</h4>)

//Al solo retornar un contenedor podemos omitir el return en el map
        peliculas.map((p,i)=>
          <div key={i}>
            <h4> Titulo: {p.title}</h4>
            <h4> Año: {p.year}</h4>
          </div>
        ) 
*/