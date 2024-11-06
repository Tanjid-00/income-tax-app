import React, { useState } from "react";
import style from "../../../styles/taxfile.module.css";

const UploadFiles = ({
  onSubmit,
  onChange,
  tinNumber,
  tinCertificateFile,
  nidNumber,
  bankStatementFile,
  remittanceFile,
  dpsStatementFile,
  fdrStatementFile,
  lastTaxFilePdf,
  remarks,
}) => {
  const [isOpen, setIsOpen] = useState({ tin: false });

  const handleFileChange = (field, e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      onChange("uploadFiles", field, file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleInputChange = (field, e) => {
    onChange("uploadFiles", field, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={style.uploadFilesForm}>
      <h3>Upload Files</h3>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.dropdownContainer}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => ({ ...prev, tin: !prev.tin }))}
            className={style.dropDownBtn}
          >
            <span>TIN Number & Certificate</span>
            <span>{isOpen.tin ? "▽" : "▷"}</span>
          </button>
          {isOpen.tin && (
            <div className={style.dropdownContent}>
              <label htmlFor="tinNumber">
                TIN Number
                <input
                  type="text"
                  id="tinNumber"
                  value={tinNumber}
                  onChange={(e) => handleInputChange("tinNumber", e)}
                />
              </label>

              <label htmlFor="tinCertificate">
                TIN Certificate (PDF)
                <input
                  type="file"
                  id="tinCertificate"
                  accept="application/pdf"
                  onChange={(e) => handleFileChange("tinCertificate", e)}
                />
                {tinCertificateFile && (
                  <p className={style.filePreview}>
                    📂 {tinCertificateFile.name}
                  </p>
                )}
              </label>
            </div>
          )}
        </div>
        {/* Nid number */}

        <label htmlFor="nidNumber">
          NID Number
          <input
            type="number"
            id="nidNumber"
            value={nidNumber}
            onChange={(e) => handleInputChange("nidNumber", e)}
          />
        </label>

        {/* Bank Statement */}
        <label htmlFor="bankStatement">
          Bank Statement (PDF)
          <input
            type="file"
            id="bankStatement"
            accept="application/pdf"
            onChange={(e) => handleFileChange("bankStatement", e)}
          />
          {bankStatementFile && (
            <p className={style.filePreview}>📂 {bankStatementFile.name}</p>
          )}
        </label>

        {/* Other File Uploads */}
        <label htmlFor="dpsStatement">
          DPS Statement (PDF)
          <input
            type="file"
            id="dpsStatement"
            accept="application/pdf"
            onChange={(e) => handleFileChange("dpsStatement", e)}
          />
          {dpsStatementFile && (
            <p className={style.filePreview}>📂 {dpsStatementFile.name}</p>
          )}
        </label>

        <label htmlFor="fdrStatement">
          FDR Statement (PDF)
          <input
            type="file"
            id="fdrStatement"
            accept="application/pdf"
            onChange={(e) => handleFileChange("fdrStatement", e)}
          />
          {fdrStatementFile && (
            <p className={style.filePreview}>📂 {fdrStatementFile.name}</p>
          )}
        </label>

        <label htmlFor="remittance">
          Remittance (PDF)
          <input
            type="file"
            id="remittance"
            accept="application/pdf"
            onChange={(e) => handleFileChange("remittance", e)}
          />
          {remittanceFile && (
            <p className={style.filePreview}>📂 {remittanceFile.name}</p>
          )}
        </label>

        <label htmlFor="lastTaxFile">
          Last Tax File (PDF)
          <input
            type="file"
            id="lastTaxFile"
            accept="application/pdf"
            onChange={(e) => handleFileChange("lastTaxFile", e)}
          />
          {lastTaxFilePdf && (
            <p className={style.filePreview}>📂 {lastTaxFilePdf.name}</p>
          )}
        </label>

        <label htmlFor="remarks">
          Remarks
          <textarea
            name="remarks"
            id="remarks"
            placeholder="Add any specific details or instruction for your tax filing here"
            value={remarks}
            onChange={(e) => handleInputChange("remarks", e)}
          ></textarea>
        </label>

        <button className={style.submitBtn} type="submit">
          CONTINUE
        </button>
      </form>
    </div>
  );
};

export default UploadFiles;
