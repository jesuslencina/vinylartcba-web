import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Designs.scss";

import self_control from "../../assets/cuadros/self-control.webp";
import apetite_for_destruction from "../../assets/cuadros/appetite-for-destruction.webp";
import igor from "../../assets/cuadros/igor.webp";
import el_madrileno from "../../assets/cuadros/el-madrileno.webp";

const Designs = () => {
    return (
        <motion.main className="designs">
            <section className="showcase">
                <div className="text">
                    <h1 className="heading">Diseños</h1>
                    <p>En centímetros</p>
                </div>
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
                            speed: 400,
                            interval: 1800,
                        }}>
                        <SplideSlide>
                            <div className="centered m30x45">
                                <img
                                    src={el_madrileno}
                                    alt="El madrileño de C. Tangana"
                                />
                                <strong>30x45</strong>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="centered m30x40">
                                <img
                                    src={igor}
                                    alt="Igor de Tyler, the creator"
                                />
                                <strong>30x40</strong>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="centered m20x30">
                                <img
                                    src={apetite_for_destruction}
                                    alt="Appetite for Destruction de Guns n' Roses"
                                />
                                <strong>20x30</strong>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <div className="centered m15x21">
                                <img
                                    src={self_control}
                                    alt="Self Control de Frank Ocean"
                                />
                                <strong>15x21</strong>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>

                <div className="container-desktop">
                    <div className="centered m30x45">
                        <img
                            src={el_madrileno}
                            alt="El madrileño de C. Tangana"
                        />
                        <strong>30x45</strong>
                    </div>
                    <div className="centered m30x40">
                        <img src={igor} alt="Igor de Tyler, the creator" />
                        <strong>30x40</strong>
                    </div>
                    <div className="centered m20x30">
                        <img
                            src={apetite_for_destruction}
                            alt="Appetite for Destruction de Guns n' Roses"
                        />
                        <strong>20x30</strong>
                    </div>
                    <div className="centered m15x21">
                        <img
                            src={self_control}
                            alt="Self Control de Frank Ocean"
                        />
                        <strong>15x21</strong>
                    </div>
                </div>
            </section>
        </motion.main>
    );
};

export default Designs;
