import CartWidget from "./CartWidget/CartWidget";
import SearchBar from "./CartWidget/SearchBar";
import "./navbar.scss"
import { Link } from "react-router-dom";

import { Container, IconButton } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import logo from '../../assets/img/logo-h-waymara.svg';
import AsesoraBtn from "./AsesoraBtn";



export default function NavBar() {  
    
    return (
        <div>
            <div className="benefitBar__container">
                <div className="benefitBar__container--content">
                    🔥 Envío gratis en compras que superen $10.000 🔥
                </div>
            </div>
            <div className="header-bar">

                <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                    <AsesoraBtn />

                    <div className="logo-div">
                        <Link to="/">
                            <img src={logo} className="App-logo" alt="logo-waymara" />
                        </Link>
                    </div>

                    <div className="group-icons">
                        <SearchBar />
                        <CartWidget />
                        <IconButton>
                            <FavoriteBorderOutlinedIcon sx={{color: "#000"}} />
                        </IconButton>
                        <IconButton>
                            <AccountCircleOutlinedIcon sx={{color: "#000"}} />
                        </IconButton>
                    </div>

                </Container>
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
                </ul>
            </nav>
        </div>
        
    );
}
