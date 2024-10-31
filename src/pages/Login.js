import React, { useState } from "react";
import style from "../styles/form.module.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/Images/logo.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "name" && password === "password") {
      login();
      navigate(from, { replace: true });
    } else {
      alert("invalid info");
    }
  };

  return (
    <div className={style.formPage}>
      <Link to={"/"}>
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">NAME</label>
          <input
            type="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
