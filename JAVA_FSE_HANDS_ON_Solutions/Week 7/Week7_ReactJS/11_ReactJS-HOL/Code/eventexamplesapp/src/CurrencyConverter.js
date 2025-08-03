// src/CurrencyConverter.js
import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const rupees = parseFloat(this.state.rupees);

    if (isNaN(rupees) || rupees <= 0) {
      alert("Please enter a valid amount in rupees.");
      return;
    }

    const euro = (rupees / 88).toFixed(2); // Approximate conversion
    this.setState({ euro });
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <h2>Currency Converter</h2>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter amount in ₹"
        />
        <button onClick={this.handleSubmit}>Convert</button>

        {this.state.euro && (
          <p>Converted Amount: €{this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
