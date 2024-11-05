import React, { useState } from "react";
import style from "../../../styles/taxfile.module.css";

const Payment = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit();
    }
  };
  return (
    <div>
      <div>
        <h3>Payment</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Your Email
            <input
              type="name"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button className={style.submitBtn} type="submit">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
