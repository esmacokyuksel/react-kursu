import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [numberResult, setNumberResult] = useState(0);

  const handleNumber1 = (e) => {
    setNumber1(Number(e.target.value));
  };
  const handleNumber2 = (e) => {
    setNumber2(Number(e.target.value));
  };
  const handleNumberResult = () => {
    setNumberResult(number1 + number2);
  };
  return (
    <div className="calculator-container">
      <h1>UseState</h1>
      <div className="form-container">
        <div className="form-group">
          <label className="form-label" htmlFor="number1"></label>
          <input
            className="form-input"
            type="number"
            id="number1"
            onChange={handleNumber1}
            value={number1}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label className="form-label" htmlFor="number2"></label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={handleNumber2}
            value={number2}
          />
        </div>
        <br></br>
        <button className="form-button">Add</button>

        <div className="form-group">
          {" "}
          <br></br>
          <label className="form-label" htmlFor="number2"></label>
          <input
            className="form-input"
            type="number"
            id="number2"
            onChange={handleNumberResult}
            value={numberResult}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
