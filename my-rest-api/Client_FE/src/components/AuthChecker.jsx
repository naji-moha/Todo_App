// src/components/AuthChecker.jsx
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthChecker = () => {
  return (
    <div>
      <h1>Please Log in</h1>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default AuthChecker;