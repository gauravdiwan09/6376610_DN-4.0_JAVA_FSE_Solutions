import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 75 },
    { name: "Rahul", score: 65 },
    { name: "Shreyas", score: 50 },
    { name: "Gill", score: 90 },
    { name: "Pant", score: 60 },
    { name: "Hardik", score: 55 },
    { name: "Jadeja", score: 78 },
    { name: "Shami", score: 80 },
    { name: "Bumrah", score: 82 },
    { name: "Kuldeep", score: 45 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70:</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
