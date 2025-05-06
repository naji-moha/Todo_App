import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignForm.css";  

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up");
      alert("Account created successfully! Please log in.");
      navigate("/"); // Redirect user to Login page after signing up
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use. Please log in.");
      } else {
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUp}>
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
          <button type="submit">Sign Up</button>
        </form>

        {/* 🔹 "Already have an account?" link to Sign In */}
        <p className="auth-toggle" onClick={() => navigate("/")}>
          Already have an account? <span style={{ color: "#007bff", cursor: "pointer" }}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
