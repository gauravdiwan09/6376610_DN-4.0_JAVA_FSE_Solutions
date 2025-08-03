import React from 'react';

const IndianPlayers = () => {
  const allPlayers = ["Virat", "Rohit", "Rahul", "Gill", "Pant", "Hardik", "Jadeja", "Shami"];
  
  const [oddPlayers, evenPlayers] = [
    allPlayers.filter((_, index) => index % 2 !== 0),
    allPlayers.filter((_, index) => index % 2 === 0),
  ];

  const T20Players = ["Virat", "Rohit", "Gill"];
  const RanjiTrophyPlayers = ["Rahul", "Jadeja", "Pant"];

  const mergedPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>
        {oddPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players:</h2>
      <ul>
        {evenPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged T20 + Ranji Trophy Players:</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
