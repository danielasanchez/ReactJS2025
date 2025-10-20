import './Footer.css';

function Footer(props){
    const {pie}=props;
    return(
        <div className="Footer">
            {pie}
        </div>
    );
}

export default Footer;