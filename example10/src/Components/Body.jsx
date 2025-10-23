import './Body.css';

function Body(props){
    const {texto,numero,children} = props;
    return(
        <div className="Body">
            <p>{texto}</p>
            {numero}
            {children[0]}
            {children[1]}
        </div>
    )
}

export default Body;

/* Version React > 19 ya no funciona
Body.propTypes={
    texto:PropTypes.string.isRequired,
    numero:PropTypes.number,
}


Body.defaultProps={
    texto:"Hola mundo"
}
*/