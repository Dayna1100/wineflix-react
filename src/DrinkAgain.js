//import React, { useState } from "react";
import "./App.css";

const wines = [
  { id: 1, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true },
  { id: 2, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true },
  { id: 3, imageUrl: '/red-wine.jpg', isNew: true, label: 'Wine', isFinished: true },
  { id: 4, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true },
  { id: 5, imageUrl: '/red-wine.jpg', isNew: true, label: 'Wine', isFinished: true }, 
  { id: 6, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true },
  { id: 7, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true },
  { id: 8, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true },
];

function DrinkAgain() {
  //const finished = wines.filter((item) => item.isFinished === true);

  return (
    <section className="category">
      <h2>Drink Again</h2>
      <div className="wine">
        <ul>
          {wines.map(wine => (
            <li key={wine.id}>
              <img src={wine.imageUrl} alt={wine.label} />
              {
                wine.isNew ?? <span className="new-badge">New!</span>
              }
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DrinkAgain;