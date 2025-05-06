import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/todo");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        alert("Too many failed login attempts. Please try again later.");
      } else {
        alert(`Login failed: ${error.message}`);
      }
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Please Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>

        <p className="auth-toggle" onClick={() => navigate("/signup")}>
          Don't have an account?{" "}
          <span style={{ color: "#007bff", cursor: "pointer" }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
