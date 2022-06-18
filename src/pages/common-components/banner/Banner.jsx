import { motion } from "framer-motion";
import "./Banner.scss";
import banner_bg from "../../../assets/pictures/banner1.webp";

import { URL_INSTAGRAM } from "../../../utils/constants";

const Banner = () => {
    return (
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
    );
};

export default Banner;
