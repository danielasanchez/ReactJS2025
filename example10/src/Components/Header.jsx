import './Header.css'
import logo from '../assets/react.svg'
import PropTypes from 'prop-types';

function Header(props){

    return(

        <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {props.titulo}{props.numero}
                </p>
         </div>
    )
}

export default Header;

/* Version React > 19 ya no funciona
Header.propTypes = {
  numero: PropTypes.number,
  titulo: PropTypes.string,
}


Header.defaultProps={
    titulo:"Ejemplo #"
}
*/