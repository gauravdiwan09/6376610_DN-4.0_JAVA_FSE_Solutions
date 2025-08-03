import React, { Component } from 'react';
import CurrencyConverter from './CurrencyConverter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sayHello = () => {
    alert("Hello! Have a nice day 🚀");
  };

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (e) => {
    e.preventDefault(); // Synthetic event
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Events</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>
          Click Me
        </button>

        <br /><br />
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
