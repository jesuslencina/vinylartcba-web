import "./styles/App.scss";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./pages/common-components/navbar/Navbar";
import Footer from "./pages/common-components/footer/Footer";
import Landing from "./pages/landing/Landing";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" element={<Landing />} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
