import React from "react";
import GoogleLogin from "./GoogleLogin";
import api from "../api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const googleResponse = await GoogleLogin();
      if (googleResponse) {
        const { idToken } = googleResponse;
        console.log(idToken);
        localStorage.setItem("idToken", idToken);
        if (idToken) {
          navigate("/game");
        }
      }
    } catch (error) {
      console.error("Error during Google login or API request:", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login With Google Account</button>
    </div>
  );
};

export default LoginForm;
