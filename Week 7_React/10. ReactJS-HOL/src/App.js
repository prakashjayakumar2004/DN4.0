import React from 'react';
import './App.css';

function App() {
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };
  const sr = "https://cdn.pixabay.com/photo/2016/03/31/20/11/workplace-1291783_1280.jpg";

  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  const element = "Office Space";

  const jsxatt = (
    <img src={sr} width="25%" height="25%" alt="Office Space" />
  );

  return (
    <div className="container">
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
