import "./Navbar.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Img from "react-cool-img";

import logo from "../../../assets/logo.webp";
import burgerMenu from "./assets/burger-menu.webp";
import closeMenu from "./assets/close-menu.webp";
import { URL_INSTAGRAM } from "../../../utils/constants";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const switchMenuStatus = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="logo-container">
                <Img src={logo} alt="Logo vinylartcba" width="38" height="38" />
                <p>VINYLARTCBA</p>
            </div>
            <nav>
                <Img
                    src={!menuOpen ? burgerMenu : closeMenu}
                    width="28"
                    height="28"
                    className="burger-menu"
                    onClick={switchMenuStatus}
                />

                <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
                    <li>
                        <NavLink to="/sobre-nosotros">SOBRE NOSOTROS</NavLink>
                    </li>
                    <li>
                        {" "}
                        <NavLink to="/disenos">DISEÑOS</NavLink>
                    </li>
                    <li>
                        {" "}
                        <a href={URL_INSTAGRAM} target="_blank">
                            ENCARGAR
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
