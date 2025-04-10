import Classes from "./logo.module.css";
import logoImg from "./Logo.svg";

function Logo() {
    return (
        <img className={Classes.logo} src={logoImg} alt="Tafawq logo"/>
    );
}

export default Logo;