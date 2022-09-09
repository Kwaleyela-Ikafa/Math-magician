import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const { total, operation, next } = state;

  const updateCalculator = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <>
      <p className="result">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </p>
      <div className="calculator">
        <button type="button" className="btn" onClick={updateCalculator}>AC</button>
        <button type="button" className="btn" onClick={updateCalculator}>+/-</button>
        <button type="button" className="btn" onClick={updateCalculator}>%</button>
        <button type="button" className="orangeBtn" onClick={updateCalculator}>÷</button>
        <button type="button" className="btn" onClick={updateCalculator}>7</button>
        <button type="button" className="btn" onClick={updateCalculator}>8</button>
        <button type="button" className="btn" onClick={updateCalculator}>9</button>
        <button type="button" className="orangeBtn" onClick={updateCalculator}>x</button>
        <button type="button" className="btn" onClick={updateCalculator}>4</button>
        <button type="button" className="btn" onClick={updateCalculator}>5</button>
        <button type="button" className="btn" onClick={updateCalculator}>6</button>
        <button type="button" className="orangeBtn" onClick={updateCalculator}>-</button>
        <button type="button" className="btn" onClick={updateCalculator}>1</button>
        <button type="button" className="btn" onClick={updateCalculator}>2</button>
        <button type="button" className="btn" onClick={updateCalculator}>3</button>
        <button type="button" className="orangeBtn" onClick={updateCalculator}>+</button>
        <button type="button" className="btn-0" onClick={updateCalculator}>0</button>
        <button type="button" className="btn" onClick={updateCalculator}>.</button>
        <button type="button" className="orangeBtn" onClick={updateCalculator}>=</button>
      </div>
    </>
  );
};

export default Calculator;
