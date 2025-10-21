import './Body.css';
import PropTypes from 'prop-types';


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


Body.propTypes={
    texto:PropTypes.string.isRequired,
    numero:PropTypes.number,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    funcion:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}

/*
Body.defaultProps={
    texto:"Hola mundo"
}
*/