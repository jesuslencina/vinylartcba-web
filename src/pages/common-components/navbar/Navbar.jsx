import "./Navbar.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Img from "react-cool-img";

import logo from "../../../assets/logo.webp";
import burgerMenu from "./assets/burger-menu.webp";
import closeMenu from "./assets/close-menu.webp";
import { URL_INSTAGRAM } from "../../../utils/constants";

const Navbar = ({ menuOpen, setMenuOpen }) => {
    const switchMenuStatus = () => {
        setMenuOpen(!menuOpen);
    };

    // Motion variants
    const navbarVariants = {
        initial: { opacity: 0, y: "-100vw" },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <motion.header
            className="navbar"
            variants={navbarVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1, duration: 1.75 }}>
            <Link className="logo-container" to="/">
                <motion.img
                    src={logo}
                    alt="Logo vinylartcba"
                    width="38"
                    height="38"
                    variants={navbarVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2, duration: 1.75 }}
                />
                <motion.p
                    variants={navbarVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4, duration: 1.75 }}>
                    VINYLARTCBA
                </motion.p>
            </Link>
            <nav>
                {/* MOBILE (BURGER MENU) */}
                <motion.img
                    src={!menuOpen ? burgerMenu : closeMenu}
                    width="28"
                    height="28"
                    className="burger-menu"
                    onClick={switchMenuStatus}
                    // Framer motion
                    variants={navbarVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.7, duration: 1.75 }}
                />

                {/* MOBILE */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul className="nav-items mobile">
                            <motion.li
                                variants={navbarVariants}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100vw" }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.25,
                                }}>
                                <NavLink
                                    to="/sobre-nosotros"
                                    onClick={switchMenuStatus}>
                                    SOBRE NOSOTROS
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={navbarVariants}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100vw" }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.25,
                                }}>
                                <NavLink
                                    to="/disenos"
                                    onClick={switchMenuStatus}>
                                    DISE??OS
                                </NavLink>
                            </motion.li>
                            <motion.li
                                variants={navbarVariants}
                                initial={{ x: "100vw" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100vw" }}
                                transition={{
                                    delay: 0.45,
                                    duration: 0.25,
                                }}>
                                <a href={URL_INSTAGRAM} target="_blank">
                                    ENCARGAR
                                </a>
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* DESKTOP */}
                <ul className="nav-items">
                    <motion.li
                        variants={navbarVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ y: "100vw" }}
                        transition={{
                            delay: 2,
                            duration: 0.5,
                        }}>
                        <NavLink to="/sobre-nosotros">SOBRE NOSOTROS</NavLink>
                    </motion.li>
                    <motion.li
                        variants={navbarVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ y: "100vw" }}
                        transition={{
                            delay: 2.25,
                            duration: 0.5,
                        }}>
                        <NavLink to="/disenos">DISE??OS</NavLink>
                    </motion.li>
                    <motion.li
                        variants={navbarVariants}
                        initial="initial"
                        animate="animate"
                        exit={{ y: "100vw" }}
                        transition={{
                            delay: 2.5,
                            duration: 0.5,
                        }}>
                        <a href={URL_INSTAGRAM} target="_blank">
                            ENCARGAR
                        </a>
                    </motion.li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Navbar;
