import './Header.css';
import logo from '../../resources/img/logo.png'
import NavBar from "./NavBar";

export default function Header() {
    return (
        <div id='header'>
            <a href={"/home"} id='logo-and-text'>
                <img src={logo} alt='Logo' id={'logo'}/>
                <p id='author-name'>Daniel Majzik | Author, Developer, Dreamer</p>
            </a>
            <NavBar/>
        </div>
    );
}
