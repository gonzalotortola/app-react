import CartWidget from "./CartWidget/CartWidget";
import "./navbar.scss"
import { Link } from "react-router-dom";

import logo from '../../assets/img/logo-h-waymara.svg';

export default function NavBar() {

    return (
        <div>
            <div className="benefitBar__container">
                <div className="benefitBar__container--content">
                    🔥 Envío gratis en compras que superen $10.000 🔥
                </div>
            </div>
            <div className="logo-div">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo-waymara" />
                </Link>
            </div>

            <nav className="MainNav">
                <ul className="MainNav-container">
                    <li className="link-1">
                        <Link to="/category/energy">Energy Life</Link>
                    </li>
                    <li className="link-1">
                        <Link to="/category/urban">Urban</Link>
                    </li>
                    <li className="link-1">
                        <Link to="/category/cosmetica">Cosmética</Link>
                    </li>
                    <li className="link-1">
                        <Link to="/category/perfumeria">Perfumeria</Link>
                    </li>
                    <li className="link-0">
                        <p>|</p>
                    </li>
                    <li className="link-2">
                        <Link to="/catalogo">Catálogo</Link>
                    </li>
                    <li className="link-3">
                        <Link to="/quienessomos">Quiénes somos</Link>
                    </li>
                    <li className="link-3">
                        <Link to="/contacto">Contacto</Link>
                    </li>
                    <li className="link-0">
                        <p>|</p>
                    </li>
                    <li className="cartWidget">
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}
