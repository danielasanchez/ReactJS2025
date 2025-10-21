import './Footer.css';
import PropTypes from 'prop-types';

function Footer({pie=<p>Copyright &copy; Todos los derechos reservados</p>}){
    
    return(
        <div className="Footer">
            {pie}
        </div>
    );
}

export default Footer;

Footer.propTypes={
    pie:PropTypes.object
}

/*
Footer.defaultProps={
    pie:<p>Copyright &copy; Todos los derechos reservados</p>
}
*/

