import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;

    if (this.state.isLoggedIn) {
      page = (
        <div>
          <h2>Welcome, User!</h2>
          <p>You can now book tickets.</p>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      page = (
        <div>
          <h2>Welcome, Guest!</h2>
          <p>You can browse details. Please login to book tickets.</p>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      );
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Ticket Booking App</h1>
        {page}
      </div>
    );
  }
}

export default App;
