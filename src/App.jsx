import React from "react";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  let [values, setValues] = useState({
    "initial investment": 10000,
    "annual investment": 1200,
    "expected return": 6,
    "duration": 10,
  });

  function handleValueChange(field, newValue) {
    setValues(preValues => {
      return {
        ...preValues,
        [field]:newValue,
      }
    })
  }

  return (
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
  )
}

export default App
