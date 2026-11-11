
import { useState } from "react";
import "./Task3.css";

function Task3({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <div className="task3-container">

      <div className="login-card">

        <div className="login-icon">🔐</div>

        <h1>Welcome Back!</h1>

        <p>Please login to access your dashboard.</p>

        <form onSubmit={handleLogin}>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="form-group">

            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />

          </div>

          <label className="show-password">

            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) =>
                setShowPassword(e.target.checked)
              }
            />

            Show Password

          </label>

          {error && (
            <p className="error-message">{error}</p>
          )}

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p className="login-note">
          Enter your email and password to continue.
        </p>

      </div>

    </div>
  );
}

export default Task3;
