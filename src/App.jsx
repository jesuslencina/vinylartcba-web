import "./styles/App.scss";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { useViewportScroll } from "framer-motion";
import Navbar from "./pages/common-components/navbar/Navbar";
import Footer from "./pages/common-components/footer/Footer";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";

const App = () => {
    const { scrollYProgress } = useViewportScroll();

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route
                    path="/"
                    element={<Landing scrollYProgress={scrollYProgress} />}
                />

                <Route
                    path="/sobre-nosotros"
                    element={<About scrollYProgress={scrollYProgress} />}
                />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
