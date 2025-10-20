import './Body.css';

function Body(props){
    const {texto,numero,booleano,arreglo,
                objeto,etiqueta,funcion} = props;
    return(
        <div className="Body">
            <p>{texto}</p>
            {numero}
            <h5>{JSON.stringify(booleano)}</h5>
            {
                arreglo.map((e,index)=>
                        <h3 key={index}>{e}</h3>
                )
            }
            {objeto.nombre}
            {etiqueta}
            {funcion(5)}
        </div>
    )
}

export default Body;