import React, { useState } from "react";
import styles from "../styles/services.module.css";

const Services = () => {
  const [section1Input, setSection1Input] = useState("");
  const [section2Input, setSection2Input] = useState("");
  const [section3Input, setSection3Input] = useState("");
  const [activeSection, setActiveSection] = useState(1);
  const [completedSections, setCompletedSections] = useState({
    1: false,
    2: false,
    3: false,
  });

  const handleSection1Submit = (e) => {
    e.preventDefault();
    if (section1Input.trim()) {
      setActiveSection(2);
      setCompletedSections((prevState) => ({ ...prevState, 1: true }));
    }
  };

  const handleSection2Submit = (e) => {
    e.preventDefault();
    if (section2Input.trim()) {
      setActiveSection(3);
      setCompletedSections((prevState) => ({ ...prevState, 2: true }));
    }
  };

  const handleSection3Submit = (e) => {
    e.preventDefault();
    if (section3Input.trim()) {
      alert("All sections completed!");
      setCompletedSections((prevState) => ({ ...prevState, 3: true }));
    }
  };

  const navigateToSection = (section) => {
    if (
      completedSections[section] ||
      section === activeSection ||
      section === activeSection + 1
    ) {
      setActiveSection(section);
    }
  };

  return (
    <div id="wrapper">
      <div id="content">
        <div className={styles.servicePage}>
          {/* Top Navigation Buttons */}
          <div className={styles.indicatorContainer}>
            <button
              className={`${styles.navButton} ${
                completedSections[1] ? styles.active : ""
              }`}
              onClick={() => navigateToSection(1)}
            >
              Section 1
            </button>
            <button
              className={`${styles.navButton} ${
                completedSections[2] ? styles.active : ""
              }`}
              onClick={() => navigateToSection(2)}
              disabled={!completedSections[1]}
            >
              Section 2
            </button>
            <button
              className={`${styles.navButton} ${
                completedSections[3] ? styles.active : ""
              }`}
              onClick={() => navigateToSection(3)}
              disabled={!completedSections[2]}
            >
              Section 3
            </button>
          </div>

          {/* Sections */}
          <div className={styles.sectionContainer}>
            {activeSection === 1 && (
              <form onSubmit={handleSection1Submit} className={styles.form}>
                <label htmlFor="section1Input">Section 1 Input:</label>
                <input
                  type="text"
                  id="section1Input"
                  value={section1Input}
                  onChange={(e) => setSection1Input(e.target.value)}
                  required
                />
                <button type="submit">Continue</button>
              </form>
            )}

            {activeSection === 2 && (
              <form onSubmit={handleSection2Submit} className={styles.form}>
                <label htmlFor="section2Input">Section 2 Input:</label>
                <input
                  type="text"
                  id="section2Input"
                  value={section2Input}
                  onChange={(e) => setSection2Input(e.target.value)}
                  required
                />
                <button type="submit">Continue</button>
              </form>
            )}

            {activeSection === 3 && (
              <form onSubmit={handleSection3Submit} className={styles.form}>
                <label htmlFor="section3Input">Section 3 Input:</label>
                <input
                  type="text"
                  id="section3Input"
                  value={section3Input}
                  onChange={(e) => setSection3Input(e.target.value)}
                  required
                />
                <button type="submit">Finish</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
