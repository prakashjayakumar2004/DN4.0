import React from 'react';

function ListOfIndianPlayers({ players }) {
  return (
    <ul>
      {players.map((item, index) => (
        <li key={index}>Mr. {item}</li>
      ))}
    </ul>
  );
}

export default ListOfIndianPlayers;
