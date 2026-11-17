
import { useState } from "react";

import {
  HashRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Task3 from "./components/Task3";
import Counter from "./pages/Counter";

import "./App.css";

function AppContent() {

  // Global Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>

      {!isLoggedIn ? (

        // Only Login Page
        <Task3 onLogin={() => setIsLoggedIn(true)} />

      ) : (

        // Complete Website After Login
        <>

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

              <NavLink to="/counter">
                Counter
              </NavLink>

              <NavLink to="/registration">
                Registration
              </NavLink>

              <button
                className="logout-nav-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </nav>

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/users" element={<Users />} />

            <Route path="/about" element={<About />} />

            <Route path="/counter" element={<Counter />} />

            <Route path="/registration" element={<Registration />} />

          </Routes>

          <footer>
            <p>© 2026 Pavan | React Learning Project</p>
          </footer>

        </>

      )}

    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
