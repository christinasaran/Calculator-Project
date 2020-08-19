import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === '='){
      this.calculate()
    } else if (button === "C"){
      this.reset();
    }else if (button === "back"){
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      })
    }

  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }

  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <div className="calculator-body">
        <Calculator result={this.state.result} />
        <KeyPad onClick={this.onClick} />
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p> {result} </p>
      </div>
    );
  }
}

class KeyPad extends React.Component {
  render() {
    return (
      <div className="board">
        <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
        <button name="back" onClick={e => this.props.onClick(e.target.name)}>back</button>
        <button name="÷" onClick={e => this.props.onClick(e.target.name)}>÷</button>
        <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button> <br />

        <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button> <br />

        <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button> <br />

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button> 
        <button id="equal" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button> <br />

        <button id="zero" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
        <br />


      </div>


    );

  }

}



export default App;
