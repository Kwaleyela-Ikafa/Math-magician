import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <>
        <p className="result">{result}</p>
        <div className="calculator">
          <button type="button" className="btn">AC</button>
          <button type="button" className="btn">+/-</button>
          <button type="button" className="btn">%</button>
          <button type="button" className="orangeBtn">÷</button>
          <button type="button" className="btn">7</button>
          <button type="button" className="btn">8</button>
          <button type="button" className="btn">9</button>
          <button type="button" className="orangeBtn">x</button>
          <button type="button" className="btn">4</button>
          <button type="button" className="btn">5</button>
          <button type="button" className="btn">6</button>
          <button type="button" className="orangeBtn">-</button>
          <button type="button" className="btn">1</button>
          <button type="button" className="btn">2</button>
          <button type="button" className="btn">3</button>
          <button type="button" className="orangeBtn">+</button>
          <button type="button" className="btn-0">0</button>
          <button type="button" className="btn">.</button>
          <button type="button" className="orangeBtn">=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
