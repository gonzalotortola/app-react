import "./navbar.css"

export default function NavBar() {

    return (
        <div>
            <nav className="MainNav">
                <ul className="MainNav-container">
                    <li className="link-1">
                        <a href="#">Energy Life</a>
                    </li>
                    <li className="link-1">
                        <a href="#">Urban</a>
                    </li>
                    <li className="link-1">
                        <a href="#">Cosmética</a>
                    </li>
                    <li className="link-1">
                        <a href="#">Perfumeria</a>
                    </li>
                    <li className="link-0">
                        <p>|</p>
                    </li>
                    <li className="link-2">
                        <a href="#">Catálogo</a>
                    </li>
                    <li className="link-3">
                        <a href="#">Quiénes somos</a>
                    </li>
                    <li className="link-3">
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}
