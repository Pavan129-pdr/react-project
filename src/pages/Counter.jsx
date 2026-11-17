
import { useState } from "react";
import "./Counter.css";

function Counter() {
  // Counter state
  const [count, setCount] = useState(0);

  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Increment function
  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  // Decrement function
  const handleDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  // Reset function
  const handleReset = () => {
    setCount(0);
  };

  // Theme toggle function
  const handleThemeToggle = () => {
    setIsDarkMode((previousTheme) => !previousTheme);
  };

  return (
    <main className={`counter-page ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <section className="counter-card">

        <div className="counter-header">
          <div className="profile-circle">P</div>

          <div>
            <h1>Counter Application</h1>
            <p>React useState Hook Practice</p>
          </div>
        </div>

        <div className="theme-section">
          <span>
            Current Theme: <strong>{isDarkMode ? "Dark Mode" : "Light Mode"}</strong>
          </span>

          <button
            className="theme-button"
            onClick={handleThemeToggle}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="counter-display">
          <p>Current Count</p>
          <h2>{count}</h2>
        </div>

        <div className="counter-buttons">
          <button className="increment-button" onClick={handleIncrement}>
            + Increment
          </button>

          <button className="decrement-button" onClick={handleDecrement}>
            − Decrement
          </button>
        </div>

        <button className="reset-button" onClick={handleReset}>
          ↻ Reset Counter
        </button>

        <p className="counter-message">
          {count > 0
            ? "Great! Your counter is increasing."
            : count < 0
            ? "Your counter is below zero."
            : "Your counter is at zero."}
        </p>

      </section>
    </main>
  );
}

export default Counter;
