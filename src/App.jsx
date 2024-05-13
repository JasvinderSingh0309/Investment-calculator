import React from "react";
import Input from "./components/Input";

function App() {


  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <Input  title="INITIAL INVESTMENT" val={10000}/>
          <Input  title="ANNUAL INVESTMENT"  val={1200}/>
        </div>
        <div className="input-group">
          <Input  title="EXPECTED RETURN" val={6}/>
          <Input  title="DURATION" val={10}/>
        </div>
      </div>  
    </>
  )
}

export default App
