import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  updateCalculator = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <p className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <div className="calculator">
          <button type="button" className="btn" onClick={this.updateCalculator}>AC</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>+/-</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>%</button>
          <button type="button" className="orangeBtn" onClick={this.updateCalculator}>÷</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>7</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>8</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>9</button>
          <button type="button" className="orangeBtn" onClick={this.updateCalculator}>x</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>4</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>5</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>6</button>
          <button type="button" className="orangeBtn" onClick={this.updateCalculator}>-</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>1</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>2</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>3</button>
          <button type="button" className="orangeBtn" onClick={this.updateCalculator}>+</button>
          <button type="button" className="btn-0" onClick={this.updateCalculator}>0</button>
          <button type="button" className="btn" onClick={this.updateCalculator}>.</button>
          <button type="button" className="orangeBtn" onClick={this.updateCalculator}>=</button>
        </div>
      </>
    );
  }
}

export default Calculator;
