import "./Landing.scss";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Landing = () => {
    return (
        <main className="landing">
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
        </main>
    );
};

export default Landing;
