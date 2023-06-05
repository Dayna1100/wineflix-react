//import React, { useState } from "react";
import "./App.css";

  const data = [
    { id: 1, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true, },
    { id: 2, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true, },
    { id: 3, imageUrl: '/red-wine.jpg', isNew: true, label: 'Wine', isFinished: true, },
    { id: 4, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true, },
    { id: 5, imageUrl: '/red-wine.jpg', isNew: true, label: 'Wine', isFinished: true, },
    { id: 6, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true, },
    { id: 7, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true, },
    { id: 8, imageUrl: '/red-wine.jpg', isNew: false, label: 'Wine', isFinished: true, },
  ];

  const DrinkAgain = () => {
  
    return (
      <section className="category">
        <h2>Drink Again</h2>
        <div className="wine">
        <ul>
        {data.map((item) => (
        <li key={item.id}> {item.isNew ? <span className="new-badge">New!</span> : null}
        <img src={item.imageUrl} alt={item.label} /></li>
        ))}
        </ul>
        </div>
      </section>
   );
};

export default DrinkAgain;