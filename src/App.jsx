
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";

import "./App.css";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>

            <nav className="navbar">

                <h2 className="logo">Pavan React</h2>

                <div className="nav-links">

                    <NavLink to="/" end>
                        Home
                    </NavLink>

                    <NavLink to="/users">
                        User Directory
                    </NavLink>

                    <NavLink to="/about">
                        About
                    </NavLink>

                </div>

            </nav>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/users" element={<Users />} />

                <Route path="/about" element={<About />} />

            </Routes>

            <footer>
                <p>© 2026 Pavan | React Learning Project</p>
            </footer>

        </BrowserRouter>
    );
}

export default App;
