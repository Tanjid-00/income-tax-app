import React from "react";
import style from "../styles/home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.homePage} id="wrapper">
      <div className={style.content} id="content">
        <h1>Home Page</h1>

        <div className={style.taxCalc}>
          <Link to={"/services/taxcalc"}>
            <h3>Tax Calculator →</h3>
            <p>
              Simply input your details, and let our AI-powered tax calculator
              give you instant tax estimates.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
