import { useState } from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { useViewportScroll } from "framer-motion";
import Navbar from "./pages/common-components/navbar/Navbar";
import Footer from "./pages/common-components/footer/Footer";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Designs from "./pages/designs/Designs";

const App = () => {
    const { scrollYProgress } = useViewportScroll();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Switch>
                <Route
                    path="/"
                    element={
                        <Landing
                            scrollYProgress={scrollYProgress}
                            menuOpen={menuOpen}
                        />
                    }
                />

                <Route
                    path="/sobre-nosotros"
                    element={
                        <About
                            scrollYProgress={scrollYProgress}
                            menuOpen={menuOpen}
                        />
                    }
                />

                <Route path="/disenos" element={<Designs />} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
