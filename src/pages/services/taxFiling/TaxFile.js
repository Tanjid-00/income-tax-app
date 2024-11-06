import React, { useEffect, useState } from "react";
import style from "../../../styles/taxfile.module.css";
import Details from "./Details";
import UploadFiles from "./UploadFiles";
import Payment from "./Payment";

const TaxFile = () => {
  const [data, setData] = useState({});
  const [activeSection, setActiveSection] = useState(1);
  const [completedSections, setCompletedSections] = useState({
    1: false,
    2: false,
    3: false,
  });

  // Store form data to retain values on navigation
  const [formData, setFormData] = useState({
    details: {
      name: "",
      spouseName: "",
      salary: "",
      phoneNumber: "",
      city: "",
    },
    uploadFiles: {
      tinNumber: "",
      tinCertificate: null, // File object here
      nidNumber: "",
      bankStatement: null, // File object here
      remittance: null,
      dpsStatement: null,
      fdrStatement: null,
      lastTaxFile: null,
      remarks: "",
    },
    payment: {
      cardNumber: "",
    },
  });

  // const handleInputChange = (formSection, field, value) => {
  //   if (
  //     field === "tinCertificate" ||
  //     field === "nidCard" ||
  //     field === "bankStatement"
  //   ) {
  //     const file = value;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [formSection]: {
  //         ...prevData[formSection],
  //         [field]: file,
  //         [`${field}Url`]: file ? URL.createObjectURL(file) : null, // Set URL for preview
  //       },
  //     }));
  //   } else {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [formSection]: {
  //         ...prevData[formSection],
  //         [field]: value,
  //       },
  //     }));
  //   }
  // };

  const handleInputChange = (formSection, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [formSection]: {
        ...prevData[formSection],
        [field]: value,
      },
    }));
  };

  const handleFormSubmit = (section) => {
    if (section === 1) {
      setActiveSection(2);
      setCompletedSections((prevState) => ({ ...prevState, 1: true }));
    } else if (section === 2) {
      setActiveSection(3);
      setCompletedSections((prevState) => ({ ...prevState, 2: true }));
    } else if (section === 3) {
      alert("Completed all the forms");
      setCompletedSections((prevState) => ({ ...prevState, 3: true }));
      setData(formData);
    }
  };

  useEffect(() => {
    console.table(data);
  }, [data]);

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
        <div className={style.taxFilingForm}>
          <div className={style.indicatorContainer}>
            <button
              className={`${style.navButton} ${
                completedSections[1] ? style.active : ""
              }`}
              onClick={() => navigateToSection(1)}
            >
              <span className={style.circle}>◉</span>
              <span>Details</span>
            </button>
            <button
              className={`${style.navButton} ${
                completedSections[2] ? style.active : ""
              }`}
              onClick={() => navigateToSection(2)}
              disabled={!completedSections[1]}
            >
              <span className={style.circle}>◉</span>
              <span>Upload Files</span>
            </button>
            <button
              className={`${style.navButton} ${
                completedSections[3] ? style.active : ""
              }`}
              onClick={() => navigateToSection(3)}
              disabled={!completedSections[2]}
            >
              <span className={style.circle}>◉</span>
              <span>Payment</span>
            </button>
          </div>
          <div className={style.sectionContainer}>
            {activeSection === 1 && (
              <Details
                onSubmit={() => handleFormSubmit(1)}
                name={formData.details.name}
                spouseName={formData.details.spouseName}
                salary={formData.details.salary}
                phoneNumber={formData.details.phoneNumber}
                city={formData.details.city}
                onChange={handleInputChange}
              />
            )}

            {activeSection === 2 && (
              <UploadFiles
                onSubmit={() => handleFormSubmit(2)}
                onChange={handleInputChange}
                tinNumber={formData.uploadFiles.tinNumber}
                tinCertificateFile={formData.uploadFiles.tinCertificate} // Pass file object
                nidNumber={formData.uploadFiles.nidNumber}
                bankStatementFile={formData.uploadFiles.bankStatement}
                remittanceFile={formData.uploadFiles.remittance}
                dpsStatementFile={formData.uploadFiles.dpsStatement}
                fdrStatementFile={formData.uploadFiles.fdrStatement}
                lastTaxFilePdf={formData.uploadFiles.lastTaxFile}
                remarks={formData.uploadFiles.remarks}
              />
            )}

            {activeSection === 3 && (
              <Payment
                onSubmit={() => handleFormSubmit(3)}
                cardNumber={formData.payment.cardNumber}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxFile;
