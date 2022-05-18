import "./styles/App.scss";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./pages/common-components/navbar/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch></Switch>
        </BrowserRouter>
    );
};

export default App;
