import React, { useState } from "react";
import style from "../styles/components/taxCalc.module.css";

const TaxCalc = () => {
  const [monthLyIncome, setMonthLyIncome] = useState("");
  const [gender, setGender] = useState("");

  // Output

  const [monthlyGrossSalary, setMonthlyGrossSalary] = useState(null);
  const [annualGrossSalary, setAnnualGrossSalary] = useState(0);
  const [basicPay, setBasicPay] = useState(0);
  const [houseRentAllowance, setHouseRentAllowance] = useState(0);
  const [medicalAllowance, setMedicalAllowance] = useState(0);
  const [totalTaxableIncome, setTotalTaxableIncome] = useState(0);
  const [totalIncTax, setTotalIncTax] = useState(0);

  //

  const handleSubmit = (e) => {
    e.preventDefault();

    const annualSalary = monthLyIncome * 12;

    // store the calculation in var
    const calculatedBasicPay = annualSalary * 0.6;
    const calculatedHouseRentAllowance = annualSalary * 0.2;
    const calculatedMedicalAllowance = annualSalary * 0.15;
    const calculatedTotalTaxableIncome = annualSalary * 0.65;
    const calculatedTotalIncTax =
      annualSalary < 300000 ? 0 : annualSalary * 0.5;

    // update all the states
    setMonthlyGrossSalary(monthLyIncome);
    setAnnualGrossSalary(annualSalary);
    setBasicPay(calculatedBasicPay);
    setHouseRentAllowance(calculatedHouseRentAllowance);
    setMedicalAllowance(calculatedMedicalAllowance);
    setTotalTaxableIncome(calculatedTotalTaxableIncome);
    setTotalIncTax(calculatedTotalIncTax);
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
                  <td>{monthlyGrossSalary}</td>
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
