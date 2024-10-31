import React, { useState } from "react";
import style from "../styles/components/taxCalc.module.css";

const TaxCalc = () => {
  const [monthLyIncome, setMonthLyIncome] = useState("");
  const [gender, setGender] = useState("");

  // Output

  const [annualGrossSalary, setAnnualGrossSalary] = useState("");
  const [basicPay, setBasicPay] = useState();
  const [houseRentAllowance, setHouseRentAllowance] = useState("");
  const [medicalAllowance, setMedicalAllowance] = useState("");
  const [totalTaxableIncome, setTotalTaxableIncome] = useState("");
  const [totalIncTax, setTotalIncTax] = useState("");

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnnualGrossSalary(monthLyIncome * 12);
    setBasicPay(annualGrossSalary * 0.6);
    setHouseRentAllowance(annualGrossSalary * 0.2);
    setMedicalAllowance(annualGrossSalary * 0.15);
    setTotalTaxableIncome(annualGrossSalary * 0.65);
    setTotalIncTax(annualGrossSalary < 300000 ? "0" : annualGrossSalary * 0.5);

    console.log(annualGrossSalary.type);
  };

  return (
    <div className={style.taxCalcWrapper} id="wrapper">
      <div className={style.taxCalcContent} id="content">
        <h1>Tax Calculator</h1>
        <div className={style.calculator}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="monthly salary">
              Monthly Gross Salary:
              <input
                type="number"
                name=""
                id="monthly salary"
                value={monthLyIncome}
                onChange={(e) => setMonthLyIncome(e.target.value)}
              />
            </label>
            <label htmlFor="gender">
              Gender:
              <select
                name=""
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <button type="submit">CALCULATE</button>
          </form>
          <div className={style.taxSlip}>
            <h3>Quick Forecast</h3>
            <table>
              <tbody>
                <tr>
                  <td>Monthly Gross Salary</td>
                  <td>{monthLyIncome}</td>
                </tr>
                <tr>
                  <td>Annual Gross Salary</td>
                  <td>{annualGrossSalary}</td>
                </tr>
                <tr>
                  <td>Basic Pay</td>
                  <td>{basicPay} </td>
                </tr>
                <tr>
                  <td>House Rent Allowance</td>
                  <td>{houseRentAllowance} </td>
                </tr>
                <tr>
                  <td>Medical Allowance</td>
                  <td>{medicalAllowance} </td>
                </tr>
                <tr>
                  <td>Total Taxable Income</td>
                  <td>{totalTaxableIncome} </td>
                </tr>
                <tr>
                  <td>Income Tax Payable</td>
                  <td>{totalIncTax} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalc;
