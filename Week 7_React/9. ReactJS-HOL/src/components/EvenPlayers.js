import React from 'react';

export default function EvenPlayers({ team }) {
  const [, second, , fourth, , sixth] = team;
  return (
    <ul>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </ul>
  );
}
