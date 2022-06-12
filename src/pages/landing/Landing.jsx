import "./Landing.scss";
import { motion, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import montero from "../../assets/cuadros/montero.webp";
import happier from "../../assets/cuadros/happier.webp";
import snowchild from "../../assets/cuadros/snowchild.webp";
import future_nostalgia from "../../assets/cuadros/future-nostalgia.webp";
import pulp_fiction from "../../assets/cuadros/pulp-fiction.webp";
import demondays from "../../assets/cuadros/demon-days.webp";

import phone_picture from "../../assets/graphics/phone.webp";
import banner_bg from "../../assets/pictures/banner1.jpg";

import { URL_INSTAGRAM } from "../../utils/constants";

const Landing = ({ scrollYProgress }) => {
    const cuadrosParallaxValue = useTransform(
        scrollYProgress,
        (value) => value * 650
    );

    /*
    const phoneParallaxValue = useTransform(
        scrollYProgress,
        (value) => value * -175
    );
    */

    return (
        <main className="landing">
            {/* HERO */}
            <section className="hero">
                <div className="text">
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}>
                        De Spotify a tu pared
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}>
                        Cuadros de ese álbum o canción que escuchás
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}>
                        <ScrollLink to="conocenos" className="btn">
                            Conocenos
                        </ScrollLink>
                    </motion.div>
                </div>

                <motion.div
                    className="cuadros"
                    style={{ marginBottom: cuadrosParallaxValue }}>
                    <motion.img
                        width="200cm"
                        src={montero}
                        alt="Cuadro del álbum MONTERO de Lil Nas X"
                        className="cuadro montero"
                        initial={{ opacity: 0, scale: 1.35 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.75 }}
                    />

                    <motion.img
                        width="100cm"
                        src={happier}
                        alt="Cuadro de la canción HAPPIER de Billie Eilish"
                        className="cuadro happier"
                        initial={{ opacity: 0, scale: 1.35 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.75 }}
                    />

                    <motion.img
                        width="100"
                        src={snowchild}
                        alt="Cuadro de la canción SNOWCHILD de The Weeknd"
                        className="cuadro snowchild"
                        initial={{ opacity: 0, scale: 1.35 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.75 }}
                    />
                </motion.div>
            </section>
            {/* ABOUT */}
            <motion.section
                className="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.25 }}>
                <p className="heading">Cuadros de lo que te gusta</p>

                <div className="container">
                    <Splide
                        aria-label="Carousel"
                        className="carousel"
                        options={{
                            rewind: true,
                            autoplay: true,
                            lazyLoad: true,
                            type: "loop",
                            focus: "center",
                            arrows: false,
                            speed: 200,
                        }}>
                        <SplideSlide>
                            <div className="centered">
                                <img
                                    width="100%"
                                    src={future_nostalgia}
                                    alt="Future Nostalgia de Dua Lipa"
                                />
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="centered">
                                <img
                                    width="100%"
                                    src={pulp_fiction}
                                    alt="Pulp Fiction"
                                />
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="centered">
                                <img
                                    width="100%"
                                    src={demondays}
                                    alt="Demon Days de Gorillaz"
                                />
                            </div>
                        </SplideSlide>
                    </Splide>

                    <div className="text">
                        <p>Te ofrecemos cuadros de:</p>
                        <ul>
                            <li>Álbumes</li>
                            <li>Canciones</li>
                            <li>Películas</li>
                            <li>Series</li>
                        </ul>

                        <strong>
                            Para cada uno, ofrecemos diferentes tamaños
                        </strong>

                        <Link to="todo" className="btn light long">
                            Ver tamaños
                        </Link>
                    </div>
                </div>
            </motion.section>

            {/* EXTRA */}
            <motion.section
                className="extra"
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.75 }}
                style={{ opacity: 0 }}>
                <motion.img
                    width="95%"
                    src={phone_picture}
                    alt="Celular mostrando una historia de instagram con un cuadro de vinylart"
                    whileInView={{ translateY: cuadrosParallaxValue }}
                />
                <div className="text">
                    <p className="heading">Te van a gustar</p>
                    <p>
                        Antes de imprimir tu cuadro, vamos a mostrate el diseño
                        y cómo se va a ver. Una vez que estés satisfecho, vamos
                        a preparar tu cuadro
                    </p>
                    <a href={URL_INSTAGRAM} className="btn pink long">
                        Entrá a nuestro instagram
                    </a>
                </div>
            </motion.section>
            <motion.section
                className="banner"
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.75 }}
                style={{ opacity: 0, backgroundImage: `url(${banner_bg})` }}>
                <p className="heading light bigger">
                    ¿Listo para materializar lo que te gusta?
                </p>
                <a href={URL_INSTAGRAM} className="btn pink">
                    Hablanos
                </a>
            </motion.section>
        </main>
    );
};

export default Landing;
