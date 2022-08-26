import './App.css'
import './stylesheets/externalfonts.css'
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function App() {
    return (
        <div id='app'>
            <Header/>
            <div id='main-content'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}
