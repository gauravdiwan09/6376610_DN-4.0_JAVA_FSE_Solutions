// src/App.js
import React from 'react';
import officeImg from './assets/officespace.jpeg';

function App() {
  const heading = <h1>Office Space Rental</h1>;

  // const imageURL = ".\\assests\\officespace.jpeg";

  const office = {
    name: "Tech Park Office",
    rent: 55000,
    address: "123 Business Street, Bangalore"
  };

  const officeList = [
    { name: "Startup Hub", rent: 45000, address: "Koramangala, Bangalore" },
    { name: "Enterprise Tower", rent: 75000, address: "MG Road, Bangalore" },
    { name: "Skyview Space", rent: 68000, address: "Whitefield, Bangalore" },
    { name: "Budget Office", rent: 30000, address: "HSR Layout, Bangalore" }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent > 60000 ? 'green' : 'red',
      fontWeight: 'bold'
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img src={officeImg} alt="Office Space" style={{ width: '400px', height: '200px' }} />

      <h2>Featured Office:</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p style={getRentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>Other Office Spaces:</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p style={getRentStyle(item.rent)}><strong>Rent:</strong> ₹{item.rent}</p>
            <p><strong>Address:</strong> {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
