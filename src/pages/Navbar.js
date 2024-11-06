import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "../styles/nav.module.css";

import logo from "../assets/Images/logo.png";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <a href="/">
          <img src={logo} alt="logo" className={style.logo} />
        </a>

        <ul className={style.navLinks}>
          {/* <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              DASHBOARD
            </NavLink>
          </li> */}
          <li>
            <button
              onClick={() => (isLoggedIn ? logout() : navigate("/login"))}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
