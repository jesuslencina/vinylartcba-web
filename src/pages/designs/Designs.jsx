import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Designs.scss";

const Designs = () => {
    return (
        <motion.main className="designs">
            <section className="showcase">
                <h1>Diseños</h1>
                <div className="container-mobile">
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
                                <h1>hola</h1>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="centered">
                                <h1>hola</h1>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="centered">
                                <h1>hola</h1>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>
        </motion.main>
    );
};

export default Designs;
