import './Header.css'
import logo from '../assets/react.svg'

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