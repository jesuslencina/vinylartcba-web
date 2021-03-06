import "./About.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ig_icon from "../../assets/icons/ai_instagram.webp";
import about_picture from "../../assets/pictures/about-us.webp";
import juli_barbaroy from "../../assets/pictures/juli-barbaroy.webp";
import juan_banchio from "../../assets/pictures/juan-banchio.webp";

const About = ({ menuOpen }) => {
    return (
        <motion.main
            className="about-page"
            initial={{ y: "100vh" }}
            animate={{ y: menuOpen ? "25vh" : 0 }}
            transition={{ delay: 0.15, duration: 0.35 }}>
            <Link to="/" className="btn go-back">
                {"<"} Volver al Inicio
            </Link>
            <section className="desc">
                <h1 className="heading mobile">Sobre nosotros</h1>
                <div className="container">
                    <img
                        src={about_picture}
                        alt="Foto de los creadores de Vinylart sosteniendo cuadros"
                        width="100%"
                        height="265"
                    />
                    <div className="text">
                        <h1 className="heading desktop">Sobre nosotros</h1>
                        <p>
                            Nos apasiona la música y decidimos crear algo
                            diferente y original para decorar nuestras y sus
                            paredes. Somos amigos de la facultad y hace más de
                            un año trabajamos juntos en este emprendimiento para
                            llevar la música a las paredes a través de diseños
                            únicos y personalizables.
                        </p>
                    </div>
                </div>
            </section>
            <section className="members">
                <h2 className="heading">Nosotros</h2>

                <div className="container">
                    <article>
                        <img
                            src={juli_barbaroy}
                            alt="Julián Barbaroy"
                            width="100%"
                            height="100%"
                            className="pfp"
                        />
                        <strong>Juli Barbaroy</strong>
                        <a
                            href="https://www.instagram.com/julibarbaroy/"
                            target="_blank">
                            <img src={ig_icon} alt="Ver Instagram" width="32" />
                        </a>
                    </article>

                    <article>
                        <img
                            src={juan_banchio}
                            alt="Juan Banchio"
                            width="100%"
                            height="100%"
                            className="pfp"
                        />
                        <strong>Juan Banchio</strong>
                        <a
                            href="https://www.instagram.com/juanbanchio/"
                            target="_blank">
                            <img src={ig_icon} alt="Ver Instagram" width="32" />
                        </a>
                    </article>
                </div>
            </section>
        </motion.main>
    );
};

export default About;
