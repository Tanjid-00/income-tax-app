import React, { useState } from "react";

const Services = () => {
  const [number, setNumber] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedNumber(number); // ইনপুট সংখ্যাটি আপডেট করা
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">সংখ্যা লিখুন:</label>
        <input
          type="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <button type="submit">জমা দিন</button>
      </form>

      <h2>আপনি যে সংখ্যা দিয়েছেন: {submittedNumber}</h2>
    </div>
  );
};

export default Services;
