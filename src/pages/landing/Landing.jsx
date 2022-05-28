import "./Landing.scss";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import montero from "../../assets/cuadros/montero.webp";
import happier from "../../assets/cuadros/happier.webp";
import snowchild from "../../assets/cuadros/snowchild.webp";

const Landing = () => {
    return (
        <main className="landing">
            {/* HERO */}
            <div className="hero">
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
                        <ScrollLink className="btn">Conocenos</ScrollLink>
                    </motion.div>
                </div>

                <div className="cuadros">
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
                </div>
            </div>
        </main>
    );
};

export default Landing;
