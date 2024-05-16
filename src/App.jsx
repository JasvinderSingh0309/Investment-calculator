import React from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  let [values, setValues] = useState({
    "initial investment": 10000,
    "annual investment": 1200,
    "expected return": 6,
    "duration": 10,
  });

  let isValidDuration = values.duration > 0;

  let calculateObj = {...values}
  let result = calculateInvestmentResults(calculateObj);

  function handleValueChange(field, newValue) {
    setValues(preValues => {
      return {
        ...preValues,
        [field]:Number(newValue),
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
      {!isValidDuration? <p className="center">Please enter positive duration!!</p> : 
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
          <Result resultArray={result} />
        </table>
      }
    </>
  )
}

export default App
