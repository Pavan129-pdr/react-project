
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Task3 from "./components/Task3";

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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
