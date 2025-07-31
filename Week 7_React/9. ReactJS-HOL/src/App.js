import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListOfIndianPlayers from './components/ListOfIndianPlayers';

function App() {
  const flag = false; // Change to false to test Indian players part

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  const IndianTeam = ['Sachin1', 'Dhoniz', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {flag ? (
        <>
          <h1>List of Players</h1>
          <ListOfPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          <OddPlayers team={IndianTeam} />
          <hr />
          <h2>Even Players</h2>
          <EvenPlayers team={IndianTeam} />
          <hr />
          <h2>List of Indian Players Merged:</h2>
          <ListOfIndianPlayers players={IndianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;
