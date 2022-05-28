import "./styles/App.scss";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./pages/common-components/navbar/Navbar";
import Landing from "./pages/landing/Landing";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" element={<Landing />} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
