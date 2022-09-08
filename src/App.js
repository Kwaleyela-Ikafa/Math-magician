import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div className="calculatorSection">
        <Calculator />
      </div>
    );
  }
}

export default App;
