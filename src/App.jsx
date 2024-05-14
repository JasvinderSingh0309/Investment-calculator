import React from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import {calculateInvestmentResults, formatter} from "./util/investment";
import { useState } from "react";

function App() {
  let [values, setValues] = useState({
    "initial investment": 10000,
    "annual investment": 1200,
    "expected return": 6,
    "duration": 10,
  });

  let calculateObj = {...values}
  let result = calculateInvestmentResults(calculateObj);
  console.log(result);

  function handleValueChange(field, newValue) {
    setValues(preValues => {
      return {
        ...preValues,
        [field]:newValue,
      }
    })
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <Input  title="initial investment" val={values["initial investment"]} 
            onValueChange={handleValueChange} />
          <Input  title="annual investment"  val={values["annual investment"]} 
            onValueChange={handleValueChange} />
        </div>
        <div className="input-group">
          <Input  title="expected return" val={values["expected return"]} 
            onValueChange={handleValueChange} />
          <Input  title="duration" val={values["duration"]} 
            onValueChange={handleValueChange} />
        </div>
      </div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <Result resultArray={[1,2,3,4,5]} />
      </table>
    </>
  )
}

export default App
